# handlebars-partials
A demonstration of including the 'Handlebars Partials' from a different file. 

Basically, here we have a partial `cards-list.html` which we need to include inside the `card-single.html`. 
For which, first we need to register a partial (`cards-list` in this example) using `Handlebars.registerPartial`.

The challenge here is, as the partial is in a separate file, we need run your application in a server (to allow Cross origin) and use the jQuery `get` function to access it and then register the partial. The `main.js` file is created to handle the same.

Note that all the 3 files are in the same directory and in a MAC machine, we just need to navigate to the directory and run `python -m SimpleHTTPServer 8000` command to start the server. (For windows we may use an apache tomcat server).

After which, just need to access the file in the browser with the url `http://0.0.0.0:8000/card-single.html`.

Hope this helps.
