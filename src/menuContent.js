let menuContent = document.createElement("div");

let heading = document.createElement("h1");
heading.innerText="Menu";
menuContent.appendChild(heading);

let heading2 = document.createElement("h2");
heading2.innerText="Starters";
menuContent.appendChild(heading2);

let paragraph = document.createElement("p");
paragraph.innerText="Artichoke dip";
menuContent.appendChild(paragraph);

let paragraph2 = document.createElement("p");
paragraph2.innerText="Caesar Salad";
menuContent.appendChild(paragraph2);

export { menuContent };