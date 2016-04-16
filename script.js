/*

Author(s): MrSherlockHolmes, scratchyone

Note: My code is hideous. Please fix it.

*/

function init() {
   function contains(val,arr) {
for(q=0;q<arr.length;q++) {
if(val.toLowerCase().indexOf(arr[q])>-1) {
return true;
}
}
return false;
}
blocked=["tutorial"];
   var focusPosts = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    for (i = 0; i < focusPosts.length; i++) {
     var type = focusPosts[i].children[0].children[1].class;
     if (type !== "isticky" || type !== "iclosed") {
       // stickies and closed posts are supposedly not to be worried about...
       if (contains(focusPosts[i].getElementsByTagName("td")[0].getElementsByClassName("tclcon")[0].getElementsByTagName("h3")[0].getElementsByTagName("a")[0].innerHTML.toLowerCase(),blocked)) {
         // ouch that is ugly
         focusPosts[i].getElementsByTagName("td")[0].getElementsByClassName("tclcon")[0].getElementsByTagName("h3")[0].getElementsByTagName("a")[0].style.color = "#bd1e24";
       }
     }
}
}

init();
