let contactContent = document.createElement("div");

let heading = document.createElement("h1");
heading.innerText="Contact Us";
contactContent.appendChild(heading);

let paragraph = document.createElement("p");
paragraph.innerText="Phone: 226-747-4748";
contactContent.appendChild(paragraph);

let paragraph2 = document.createElement("p");
paragraph2.innerText="E-mail: arestauran@restaurant.com";
contactContent.appendChild(paragraph2);

export { contactContent };