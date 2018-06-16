var period = 2000;
function freeRep() {
    setTimeout(freeRep, period);
    var a = document.getElementsByClassName("i-amphtml-embedded")[0].children[1].children[0].shadowRoot.children[8].children[1].shadowRoot.children[1].children[0].children[0].children[0].shadowRoot.children[11].children[9].children[0].children[3].children[0];
    a.children[0].style.display = 'none';
    a.children[1].style.display = 'block';
}
freeRep();
