// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

var map = document.querySelector(".map-container svg");
var resultContainer = document.querySelector(".countywide");

for (var c in countyData) {
  var county = countyData[c];
  var element = document.querySelector(`.map-container svg [id="${c.replace(/ /g, "_")}"]`);
  if (!element) console.log(c);
  if (county.Clinton.votepct > 0 || county.Sanders.votepct > 0) {
    if (county.Clinton.votepct > county.Sanders.votepct) {
      element.style.fill = "rgb(248, 158, 93)";
    } else {
      element.style.fill = "rgb(121, 143, 113)";
    }
  } else {
    element.style.fill = "#CCC";
  }
};

map.addEventListener("click", function(e) {
  var result = window.countyData[e.target.id];
  resultContainer.classList.remove("unchosen");
  resultContainer.innerHTML = `
<h2>${e.target.id} County</h2>
<div class="reporting">Precincts reporting: ${result.Clinton.precinctsreportingpct}%</div>
<ul class="candidates">
  <li> <span class="name">Clinton</span>: <span class="result">${result.Clinton.votepct}%</span>
  <li> <span class="name">Sanders</span>: <span class="result">${result.Sanders.votepct}%</span>
</ul>
  `;
});