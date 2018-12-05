window.onload = function() {
    var element = document.getElementById('alcoveLogo');
    element.style.opacity = 0.2;

    var elements = document.getElementsByClassName('servicesBtn');

    for(var i = 0; i < elements.length; i++) {
        if(i % 2 == 0) {
            elements[i].style.color = 'rgb(0, 106, 255)';
        }
    }

    var e = document.getElementsByTagName('h2');
    for(var i = 0; i < e.length; i++) {
        e[i].style.borderColor = 'rgb(255, 0, 0)';
        e[i].style.borderWidth = '2px';
        e[i].style.borderStyle = 'solid';
        e[i].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
    }

    var el = document.querySelector(".navigation > li:nth-child(3) > a");
    el.style.color = 'rgb(255, 0, 0)';


    var ele = document.querySelectorAll('.navigation > li:nth-child(even) > a');
    for (var i = 0; i < ele.length; i++) {
        ele[i].style.color = 'rgb(255, 0, 0)';
    }
}