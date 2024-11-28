import { homeContent } from "./homeContent.js";
import { menuContent } from "./menuContent.js";
import { contactContent } from "./contactContent.js";


function showHome(){
    let content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(homeContent);
}

function showMenu(){
    let content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(menuContent);
}

function showContact(){
    let content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(contactContent);
}


// add events to nav buttons
let home = document.getElementById("home");
home.addEventListener("click", showHome);

document.getElementById("menu").addEventListener("click", showMenu);
document.getElementById("contact").addEventListener("click", showContact);