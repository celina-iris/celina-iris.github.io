var albums, users, photos, posts;
var numAlb = 4999, click = 0, numPosts = 99, endPosts = 0;
$(document).ready(function (){
    
    $.get("https://jsonplaceholder.typicode.com/users", function (data) {
        users = data;
        console.log(users[0].username);
    });
    
    $.get("https://jsonplaceholder.typicode.com/albums", function (data) {
		albums = data;
        console.log(albums[0].title);
	});
    
    $.get("https://jsonplaceholder.typicode.com/photos", function (data) {
        photos = data;
        console.log(photos[0].title);
    });
    
    $.get("https://jsonplaceholder.typicode.com/posts", function (data) {
		posts = data;
        console.log(posts[0].title);
        setTimeout(function(){
            display();
        }, 1000);
	});
    
});

function display() {
    setHeader();
    getStart();
    getEnd();
    displayInfo();
    displayAlbum();
    hideNextButton();
    displayPosts();
    showButton();
}

function setHeader() {
    var head = document.createElement("section");
    $(head).attr("style", "color: #fff;");
    var navi = document.createElement("nav");
    $(navi).addClass("fill");
    var pl = document.createElement("ul");
    
    var l1 = document.createElement("li");
    var l2 = document.createElement("li");
    var l3 = document.createElement("li");
    
    var url = new URL(window.location.href);
    var userNum = url.searchParams.get("user");
    
    var on = document.createElement("a");
    $(on).attr("href", "Home-feed.html");
    $(on).text("Home");
    var tw = document.createElement("a");
    $(tw).attr("href", url);
    $(tw).text("Profile");
    var th = document.createElement("a");
    $(th).attr("href", "InAlbum.html?user=" + userNum);
    $(th).text("Pictures");
    
    $(l1).append(on);
    $(l2).append(tw);
    $(l3).append(th);
    
    $(pl).append(l1);
    $(pl).append(l2);
    $(pl).append(l3);
    
    $(navi).append(pl);
    
    $(head).append(navi);
    
    $(".place").append(head);
}

function displayInfo() {
    
    var url = new URL(window.location.href);
    var userNum = parseInt(url.searchParams.get("user")) - 1;
    
    var sideInfo = document.createElement("div"); //this means that friends is a div
    $(sideInfo).addClass("side_container");
    
    /*Profile Pic*/
    var profilePic = document.createElement("div");
    $(profilePic).attr("id", "userpic");
    
    /*User Name*/
    var username = document.createElement("span");
    $(username).addClass("side_username");
    $(username).text(users[userNum].username);
    
    /*Instagram and Twiiter*/
    var instagram = document.createElement("a");
    $(instagram).attr("id", "insta");
    $(instagram).prop("href", "https://www.instagram.com/");
    
    var twitter = document.createElement("a");
    $(twitter).attr("id", "twitter");
    $(twitter).prop("href", "https://twitter.com/");
    
    //name
    var realName = document.createElement("span");
    $(realName).addClass("side_span");
    $(realName).text("Name");
    $(realName).append("</br>");
    
    var realName1 = document.createElement("span");
    $(realName1).addClass("side_p");
    $(realName1).text(users[userNum].name);
    $(realName1).append("</br>");
    
    //email
    var email = document.createElement("span");
    $(email).addClass("side_span");
    $(email).text("Email");
    $(email).append("</br>");
    
    var email1 = document.createElement("span");
    $(email1).addClass("side_p");
    $(email1).text(users[userNum].email);
    $(email1).append("</br>");
    
    //address
    var address = document.createElement("span");
    $(address).addClass("side_span");
    $(address).text("Address: ");
    $(address).append("</br>");
    
    var address1 = document.createElement("a");
    $(address1).addClass("side_p");
    $(address1).text(users[userNum].address.suite + ", " +
                users[userNum].address.street + ", " + 
                users[userNum].address.city + " " +
                users[userNum].address.zipcode);
    $(address1).append("</br>");
    var map = "http://google.com/maps/?q=" + users[userNum].address.geo.lat + "," + users[userNum].address.geo.lng;
    $(address1).prop("href", map); 
    
    //phone
    var phone = document.createElement("span");
    $(phone).addClass("side_span");
    $(phone).text("Phone");
    $(phone).append("</br>");
    
    var phone1 = document.createElement("span");
    $(phone1).addClass("side_p");
    $(phone1).text(users[userNum].phone);
    $(phone1).append("</br>");
    
    //website
    var website = document.createElement("span");
    $(website).addClass("side_p");
    $(website).text("Website");
    $(website).append("</br>");
    
    var website1 = document.createElement("span");
    $(website1).addClass("side_p");
    $(website1).text(users[userNum].website);
    $(website1).append("</br>");
    
    //company
    var company = document.createElement("span");
    $(company).addClass("side_span");
    $(company).text("Company");
    $(company).append("</br>");
    
    var company1 = document.createElement("span");
    $(company1).addClass("side_p");
    $(company1).text("Name: " + users[userNum].company.name);
    $(company1).append("</br>");
    
    var company2 = document.createElement("span");
    $(company2).addClass("side_p");
    $(company2).text("Catch Phrase: " + users[0].company.catchPhrase);
    $(company2).append("</br>");
    
    var company3 = document.createElement("span");
    $(company3).addClass("side_p");
    $(company3).text("Bs: " + users[userNum].company.bs);
    $(company3).append("</br>");
    
    $(sideInfo).append(profilePic);
    $(sideInfo).append(username);
    $(sideInfo).append(instagram);
    $(sideInfo).append(twitter);
    
    $(sideInfo).append(realName);
    $(sideInfo).append(realName1);
    
    $(sideInfo).append(email);
    $(sideInfo).append(email1);
    
    $(sideInfo).append(address);
    $(sideInfo).append(address1);
    
    $(sideInfo).append(phone);
    $(sideInfo).append(phone1);
    
    $(sideInfo).append(website);
    $(sideInfo).append(website1);
    
    $(sideInfo).append(company);
    $(sideInfo).append(company1);
    $(sideInfo).append(company2);
    $(sideInfo).append(company3);
    
    $(".sidebar").append(sideInfo);    
    $(".side_container").hide().fadeIn(800);
}

function getStart() {
    var found = false;
    var url = new URL(window.location.href);
    var userNum = parseInt(url.searchParams.get("user"));
    if(!isNaN(userNum)) {
        while(numPosts > 0 && !found) {
            if(userNum == parseInt(posts[numPosts].userId)) {
                found = true;
            } else {
                --numPosts; 
            }
        }
    }
    console.log(numPosts);
}

function displayAlbum(){
    var sideInfo = document.createElement("div"); //this means that friends is a div
    $(sideInfo).addClass("album_container");
    var temp = 1;
    for(var count = 49 ; count < 5000 && temp < 100; count += 49) {
        var album = document.createElement("div");
        var image = $("<img>");
        $(image).attr("style", "width:30%");
        $(image).addClass("album_img");
        $(image).attr("href", "InAlbum.html?Album"+temp);
        image.attr("src", photos[count].thumbnailUrl);
        
        var clkabl = $("<a>");
        $(clkabl).attr("href", "InAlbum.html?album=" + temp);
        $(clkabl).addClass("album_p");
        $(clkabl).text(albums[temp-1].title);
        $(album).append(image);
        $(album).append(clkabl);
        ++temp;
    
        $(sideInfo).append(album);
    }
    $(".albumbar").append(sideInfo);    
    $(".album_container").hide().fadeIn(800);
}

function getEnd() {
    var found = false;
    var url = new URL(window.location.href);
    var userNum = parseInt(url.searchParams.get("user"));
    if(!isNaN(userNum)) {
        endPosts = numPosts;
        while(endPosts > 0 && !found) {
            if(userNum != parseInt(posts[numPosts].userId)) {
                found = true;
            } else {
                --endPosts; 
            }
        }
    }
    console.log(endPosts);
}

function displayPosts() {
    if(numPosts > endPosts) {
        for (var i = numPosts; i > numPosts - 5 && i > endPosts; i--){
            var container = document.createElement("div");
            $(container).addClass("post_container");

            var display_picture = document.createElement("div");
            $(display_picture).addClass("post_display_picture");

            /*user_name is attached to display_picture*/
            var user_name = document.createElement("a");
            $(user_name).addClass("post_user_name");

    /*NEEDS LINKING TO SPECIFIC PROFILE*/
            $(user_name).attr("href", "Profile-feed.html?user=" + posts[i].userId);
            $(user_name).text(users[posts[i].userId - 1].username);

            var title = document.createElement("div");
            $(title).addClass("post_title");
            $(title).text(posts[i].title);

            var text = document.createElement("div");
            $(text).addClass("post_text");
            $(text).text(posts[i].body);

            $(display_picture).append(user_name);
            $(container).append(display_picture);
            $(container).append(title);
            $(container).append(text);
            $(".feed").append(container);  
        }
        snippet();
        $(".post_container").hide().fadeIn(800);
        numPosts = i;
        click +=1;
    }
}

function snippet() {
    var showChar = 100;
    var ellipsestext = "...";
    var moretext = "more";
    var lesstext = "less";
    $('.post_text').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar-1, content.length - showChar);

            var html = c + '<span class="moreelipses">'+ellipsestext+'</span>&nbsp;<span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">'+moretext+'</a></span>';

            $(this).html(html);
        }
    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
}

function showButton() {
    $("#btnNext").hide().fadeIn(800);
}

function onNextClicked() {
    displayPosts();
    hideNextButton();
    console.log(numPosts);
}

function hideNextButton() {
    if (click == 2){
        $("#btnNext").addClass("hide-me");
    }
}
