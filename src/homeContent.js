let homeContent = document.createElement("div");

let heading = document.createElement("h1");
heading.innerText="A Restaurant";
homeContent.appendChild(heading);

let heading2 = document.createElement("h2");
heading2.innerText="For when you want to go to a restaurant";
homeContent.appendChild(heading2);

let paragraph = document.createElement("p");
paragraph.innerText="We have food. We have drinks. You can eat and drink them here after paying our reasonable prices.";
homeContent.appendChild(paragraph);

let paragraph2 = document.createElement("p");
paragraph2.innerText="We are open during business hours and closed outside of business hours.";
homeContent.appendChild(paragraph2);

export { homeContent };