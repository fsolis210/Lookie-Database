var APIkey = "NxD7nHwkbdOwWiA4LU52MQ";
var url =
  "https://www.goodreads.com/search/index.xml?key=" + APIkey + "&q=Ender+Game";

$("#find-book").on("click", function(event) {
  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
  event.preventDefault();

  // Here we grab the text from the input box
  var book = $("#searchInput").val();

  // Here we construct our URL
  var queryURL =
    "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=" +
    APIkey +
    "&q=" +
    book;

  // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
  // and display it in the div with an id of movie-view

  // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

  $.ajax({
    url: queryURL,
    method: "GET",
    dataType: "xml",
    success: function(xml) {
      console.log(xml);
      $(xml)
        .find("work")
        .each(function() {
          // Append new data to the DIV element.
          $("#showResults").append(
            "<div class='p-3'>" +
              "<div><b>Name of Book: </b>" +
              $(this)
                .find("title")
                .text() +
              "</div> " +
              "<div><b>Author: </b>" +
              $(this)
                .find("author")
                .text() +
              "</div> " +
              "<div><b>Cover Image: </b><br>" +
              "<img src='" +
              $(this)
                .find("image_url")
                .text() +
              "' >" +
              "</div>" +
              "</div>"
          );
        });
    }

    // -----------------------------------------------------------------------
  });
});
