var APIkey = "NxD7nHwkbdOwWiA4LU52MQ";
var url =
  "https://www.goodreads.com/search/index.xml?key=" + APIkey + "&q=Ender+Game";

$("#find-book").on("click", function(event) {
  event.preventDefault();

  var book = $("#searchInput").val();

  var queryURL =
    "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=" +
    APIkey +
    "&q=" +
    book;


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
  });
});
