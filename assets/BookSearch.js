var APIkey = "NxD7nHwkbdOwWiA4LU52MQ";

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
      console.log(xml);
      $(xml)
        .find("work")
        .each(function() {
          // Append new data to the DIV element.
          $("#showBookResults").append(
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
}

$("#find-book").on("click", function(event) {
  event.preventDefault();
  $("#showBookResults").empty();

  var search = $("#searchInput").val();

  displayBooks(search);
  
});
