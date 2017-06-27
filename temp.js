var photos;
var numPic = 0;
$(document).ready(function () {
    $.get("https://jsonplaceholder.typicode.com/photos", function (data) {
        photos = data;
    });
    
    displayPictures();
});

function displayPictures() {
    if(numPic < 5000) {
        for(var count = numPic; count < numPic + 9 ; ++count) {
            var image = $("<img>");
            $(".images").append(image);
            image.attr("src", "http://placehold.it/600/92c952");
            
        }
    }
}