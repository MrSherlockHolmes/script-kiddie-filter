/*

Author(s): MrSherlockHolmes

*/

function init() {
  var focusPosts = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
  for (i = 0; i < focusPosts.length; i++) {
    console.log(focusPosts[i]);
    // I got bored... someone filter out stickies for meh.
  }
}

init();
