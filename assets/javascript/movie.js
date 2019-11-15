var movie = "The Notebook";
// $("#searchBar").val();
function displayMovie(){
    var queryUrl = "https://www.omdbapi.com/?t=" + movie + "&apikey=7127e834";

    $.ajax({
        url: queryUrl,
        method: "GET"
      }).then(function(response) {
        var title = response.Title;
        $("#movieTitle").text(title);  
        var rated = response.Rated;
        $("#movieRated").text(rated);
        var plot = response.Plot;
        $("#moviePlot").text(plot);
        var mPoster = $("<img>").attr({
          id: "image",
          src: response.Poster
        });
        $("#moviePoster").append(mPoster);
      }); 
}
displayMovie();
