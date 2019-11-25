var APIkey = "NxD7nHwkbdOwWiA4LU52MQ";
var title = "";
var author = "";
var cardCount = 0;

//ajax book search
function displayBooks(search) {
  var queryURL =
    "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=" +
    APIkey +
    "&q=" +
    search;

  $.ajax({
    url: queryURL,
    method: "GET",
    dataType: "xml",
    success: function(xml) {
      $(xml)
        .find("work")
        .each(function() {
          title = $(this)
            .find("title")
            .text();
          title = encodeURIComponent(title).replace(/%20/g, "+");
          author = $(this)
            .find("author").find("name")
            .text();
          author = encodeURIComponent(author).replace(/%20/g, "+");
          var amazonLink =
            "https://www.amazon.com/s?k=" +
            title + "+" + author +
            "&i=stripbooks&ref=nb_sb_noss_2";

          // Append new data to the DIV element.
          $("#front"+cardCount).html(
            "<img src='" + $(this).find("image_url").text() + "' height='300' width='192'>"
          )
          $("#card" + cardCount).append(
            "<div class='p-3'>" +
              "<div><b>Name of Book: </b>" +
              $(this)
                .find("title")
                .text() +
              "</div> " +
              "<div><b>Author: </b>" +
              $(this)
                .find("author").find("name")
                .text() +
              "</div> " +
              "<a target='_blank' href=" +
              amazonLink +
              'class="btn btn-warning">Amazon Search</a>' +
              "</div>"
          );
          cardCount++;
        });
    }
  });
}



function advancedDisplayBooks(movie){
  cardCount = 0;
  displayBooks(movie);
}

function resultPageLoad() {
  movie = localStorage.getItem("movie");
  displayMovie(movie);
  advancedDisplayBooks(movie);
  
}
