// get input element
let filterInput = document.getElementById("filter");
// add event listener
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  // get value of input
  let filterValue = document.getElementById("filter").value.toUpperCase();

  // get names ul
  let ul = document.getElementById("names");

  // get li from ul
  let li = ul.querySelectorAll("li.nav-item");

  // loop through collection items li
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    // if matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
