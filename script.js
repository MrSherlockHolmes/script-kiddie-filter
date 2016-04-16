/*

Author(s): MrSherlockHolmes, scratchyone

*/

function init() {
  var focusPosts = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
  for (i = 0; i < focusPosts.length; i++) {
    console.log(focusPosts[i].getElementsByTagName("td")[0].getElementsByClassName("tclcon")[0].getElementsByTagName("h3")[0].getElementsByTagName("a")[0].innerHTML);
  //This should be rewritten to use selectors instead of nested JS functions
  }
}

init();
