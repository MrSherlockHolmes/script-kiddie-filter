/*

Author(s): MrSherlockHolmes, iamunknown2
Note: Short, but seemingly a little... risky - plus one error.


*/

var links = document.getElementsByTagName("a");
var blocklist = ["tutorial"];
var block = false;
for (var i in links) {
    var notsticky = links[i].parentNode.parentNode.innerHTML.indexOf("Sticky:") === -1;
    if (notsticky && links[i].href.indexOf("/discuss/topic/") > -1 && links[i].style.color !== "#888") {
        for (var x = 0; x < blocklist.length; x++) {
            block = block || links[i].innerHTML.toLowerCase().indexOf(blocklist[x]) > -1;
        }
        if (block) {
            links[i].style.color = "#bd1e24";
            block = false;
        }
    }
}
