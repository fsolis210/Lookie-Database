
var movie = "";

//Mat added an argument for the function
function displayMovie(movie){

    var queryUrl = "https://www.omdbapi.com/?t=" + movie + "&apikey=7127e834";
    console.log(queryUrl);

    $.ajax({
        url: queryUrl,
        method: "GET"
      }).then(function(response) {
        var movieDiv = $("<div class='movie'>");
        var title = response.Title;
        var hOne = $("<h>").text("Title: " + title);
        movieDiv.append(hOne);
        var rated = response.Rated;
        var pOne = $("<p>").text("Rated: " + rated);
        movieDiv.append(pOne);
        var plot = response.Plot;
        var pTwo = $("<p>").text("Plot: " + plot);
        movieDiv.append(pTwo);
        var mPoster = response.poster;
        var poster = $("<img>").text("Poster: " + mPoster);
        movieDiv.append(poster);
        console.log(movieDiv);
        $("#movieCard").html(movieDiv);
        console.log(title);
        console.log(rated);
        console.log(plot);
        console.log(mPoster);
      });   
}

$("#searchButton").on("click", function(event) {
  event.preventDefault();

  movie = $("#searchBar").val();
  localStorage.setItem("movie", movie);
  console.log(movie);

  window.location.href = "results.html";
});


