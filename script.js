/*

Author(s): MrSherlockHolmes

Note: My code is hideous. Please fix it.

*/

function init() {
  var focusPosts = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
  for (i = 0; i < focusPosts.length; i++) {
    var type = focusPosts[i].children[0].children[1].class;
    if (type !== "isticky" || type !== "iclosed") {
      // stickies and closed posts are supposedly not to be worried about...
      if (focusPosts[i].children[0].children[2].getElementsByTagName("a").textContent.toLowerCase().indexOf("tutorial") > -1) {
        // ouch that is ugly
        focusPosts[i].children[0].children[2].children[0].style.color = "#bd1e24";
        // focusPosts[i].children[0].children[2].children[0].style.backgroundImage: "url(\"\")";
      }
    }
  }
}

init();
