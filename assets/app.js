$(document).ready(function () {
    // get element id or class of the search box
    $("button").on("click", function () {
        // console.log("buttonclick");
        // set the property that contains the value = a JS var 
        var searchTerm = $("#user-input").val();
        console.log(searchTerm);
        // use JS var to post to Giffy 


        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            searchTerm + "&api_key=D8cvFIWiqa5Iyq77elQ6iGMl1AHLarYh&limit=10";

        // parse the response from giffy into a list (drink menue)
        $.ajax({
            url: queryURL,
            method: "GET"
        })


            .then(function (response) {
                console.log(queryURL);

                console.log(response);
                // storing the data from the AJAX request in the results variable
                var results = response.data;

                // Looping through each result item
                for (var i = 0; i < results.length; i++) {

                    // Creating and storing a div tag
                    var animalDiv = $("<div>");

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + results[i].rating);

                    // Creating and storing an image tag
                    var animalImage = $("<img>");
                    // Setting the src attribute of the image to a property pulled off the result item
                    animalImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and image tag to the animalDiv
                    animalDiv.append(p);
                    animalDiv.append(animalImage);

                    // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                    $("#gifs-appear-here").prepend(animalDiv);
                }
            });
    });
});
// display the gifs


// get base div 


// for loop the list of giffy 


// create the image


// populate the URL for the image object 


// append the image to our base div 


// var queryURL = "http://api.giphy.com/v1/gifs/search?q="+searchTerm+"&api_key="+apiKey+"&limit=5"
// $.ajax({         url: queryURL,         method: "GET"       })


