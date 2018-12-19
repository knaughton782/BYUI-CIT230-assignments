function hamburger() {
    var x = document.getElementById("responsive");
    if (x.className === 'topnav') {
        x.className += "responsive";
    } else {
        x.className = 'topnav';
    }
}