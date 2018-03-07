$(document).ready(function() {
  var template = Handlebars.compile($("#base-template").html());
  $.get('cards-list.html').done(function(text) { //Accessing cards-list.html
    Handlebars.registerPartial('cards-list', text); //Registering the partial in the name of `cards-list`
    /* Setting the JSON data here*/
    var context = {
      "data": [
        {
          "id": "1",
          "title": "A",
          "img": "imga.jpg",
          "url": "card-single.html"
        },
        {
          "id": "2",
          "title": "B",
          "img": "imgb.jpg",
          "url": "card-single.html"
        }
      ]
    };
    $('#results').html(template(context)); //Rendering the result in the webpage
  });
});
