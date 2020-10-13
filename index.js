
// enabling dark mode

//dark mode
var darkMode = event => {
    
    var x = document.getElementsByTagName('BODY')[0];
    x.classList.toggle('nightMode');
}

var toggle = document.querySelector("#test");
toggle.addEventListener('click', darkMode);

//add search query to determine github user
//add username
//  add followers
// add repo count
// get an alert if username not valid

document.addEventListener("DOMContentLoaded", init);
function init() {

    document.getElementById('usernameButton').addEventListener("click", ev => {
            ev.preventDefault(); //to stop the page reload;
        })
}  


// 💥💥💥💥💥💥💥💥💥💥💥💥💥 GET GIPHY API PLAY 💥💥💥💥💥💥💥💥💥💥💥💥💥💥
async function changeName() {
    //log the user query
    var userQuery = document.getElementById("inputUsername").value.trim();
    
 // read giphy query
    let giphyResponse = await fetch(`https://api.github.com/users/${userQuery}`);
    let giphyGif = await giphyResponse.json();
console.log(giphyGif.url);

     let img = document.createElement('img');
        img.src = giphyGif.avatar_url;
        img.className = "githubImage";
    var element = document.getElementById("userImage");  
    element.appendChild(img);

    var para = document.createElement('p');
    var node = document.createTextNode("Name: " + giphyGif.name); 
    para.appendChild(node);
    var element = document.getElementById("div2");
    element.appendChild(para);

    var para = document.createElement('p');
    var node = document.createTextNode("Location: " + giphyGif.location); 
    para.appendChild(node);
    var element = document.getElementById("div2");
    element.appendChild(para);

    var para = document.createElement('p');
    var node = document.createTextNode("Followers: " + giphyGif.followers); 
    para.appendChild(node);
    var element = document.getElementById("div2");
    element.appendChild(para);

    var para = document.createElement('p');
    var node = document.createTextNode("Repositories count: " + giphyGif.public_repos); 
    para.appendChild(node);
    var element = document.getElementById("div2");
    element.appendChild(para);


    return giphyGif;

}

var searchButton = document.querySelector('#usernameButton');
searchButton.addEventListener('click', changeName);

