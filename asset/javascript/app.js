var queryUrl = "https://www.omdbapi.com/?t=" + movie + "&apikey=7127e834";
var movie = $(this).attr("data-name");

function displayMovie(){
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });   
}