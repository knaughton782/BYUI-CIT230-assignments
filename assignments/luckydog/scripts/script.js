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
//var output = document.getElementById('closeSchedule');
var closeInfo = document.getElementById('closeSchedule');
var request = new XMLHttpRequest();
var url = "https://knaughton782.github.io/assignments/luckydog/scripts/temples.json";


var request = new XMLHttpRequest();
request.open("GET", url, true);
request.onload = function() {
    //console.log(request.responseText);
    var res = JSON.parse(request.responseText);
    //console.log(res[0]);
    
    closeSchedule(res);

};
request.send();

function closeSchedule(data) {
    var test = "";
    for (var i = 0; i < data.length; i++) {
        test = data[i].closeSchedule;
    }
    closeInfo.insertAdjacentHTML('beforeend', test);
}


// request.onreadystatechange = function () {
//     if (request.readyState == 4 && request.status == 200) {
//             //output.innerHTML = JSON.parse(request.responseText)[0];
//             //console.log(request.responseText);
//             var response = JSON.parse(request.responseText);
//             //console.log(response.temples);
//             var temples = response;

//             var output = '';
//             for (var i = 0; i < temples.length; i++) {
//                 output = temples[i];
//                 console.log(output);
//             } 
//             document.getElementById('closeSchedule').innerHTML = output;
//     }
// };
// request.open("GET", url, true);
// request.send();



