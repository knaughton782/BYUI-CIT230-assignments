//hamburger menu
function hamburger() {
    var x = document.getElementById("responsive");
    if (x.className === 'topnav') {
        x.className += "responsive";
    } else {
        x.className = 'topnav';
    }
}


//jquery content switching //////////////////
$(document).ready(function () {

    var t1 = $("#temple1");
    var t2 = $("#temple2");
    var t3 = $("#temple3");
    var t4 = $("#temple4");

    // default state: temple 1 showing
    t1.show();
    t2.hide();
    t3.hide();
    t4.hide();

    //button on temple 1 shows temple 2
    function next1() {
        t1.hide();
        t2.show();
        t3.hide();
        t4.hide();
    }
    $('#next1').click(next1);


    //click on temple 2 page shows temple 3
    function next2() {
        t1.hide();
        t2.hide();
        t3.show();
        t4.hide();
    }
    $('#next2').click(next2);

    //to show temple 4
    function next3() {
        t1.hide();
        t2.hide();
        t3.hide();
        t4.show();
    }
    $('#next3').click(next3);

    //to show temple 1
    function next4() {
        t1.show();
        t2.hide();
        t3.hide();
        t4.hide();
    }

    $('#next4').click(next4);
});


//////////// json section ///////////////////
var output = document.getElementById('closeSchedule');
var request = new XMLHttpRequest();
var url = "https://knaughton782.github.io/assignments/luckydog/scripts/temples.json";



request.onreadystatechange = function () {
     if (request.readyState == 4 && request.status == 200) {
            output.innerHTML = JSON.parse(request.responseText)[0];
    }
}
request.open("GET", url, true);
request.send();



