const products = {};

const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");

let cNum = 1;
function coll(num) {
  if (num === 1) window.location.href = "products-purelab.html";
  if (num === 2) window.location.href = "products-medica.html";
  if (num === 3) window.location.href = "products-centra.html";
  if (num === 4) window.location.href = "products-biopure.html";
}
