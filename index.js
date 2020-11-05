// Import stylesheets
import "./style.css";

const elems = [100, 200, 50, 210, 230];

// Write Javascript code!
const appDiv = document.getElementById("app");

for (let elem of elems) {
  const div = document.createElement("div");
  div.classList.add("bar");
  div.classList.add("bar1");
  div.style.height = `${elem}px`;
  div.textContent = elem;
  div.addEventListener("click", removeBar);
  appDiv.appendChild(div);
}

function removeBar(elem) {
  appDiv.removeChild(elem.target);
}
