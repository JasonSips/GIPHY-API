
function getData(){
    var input = $("#searchgifs").val()


var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=8AXxYKXJRnX55Y9Tz1yz1jUPf2d0XbIT&limit=30"﻿);
xhr.done(function(response) { console.log("success got data", response); });

console.log("success got data, respomse");

var gifsIn = response.data

for (i in gifsIn){
     $(".inner").append("<img src="+gifsIn[i].images.original.url+"/>"); 
     console.log(response);
};
};
