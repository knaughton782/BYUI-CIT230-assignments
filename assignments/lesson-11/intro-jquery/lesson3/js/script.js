window.onload = function() {

    $('#alcoveLogo').next().css('background-color', 'green');
    $('.box1').nextAll().css('background-color', 'green');
    $('.header').children().css('background-color', 'blue');
    $('.navigation > li:eq(2)').parent().parent().parent().css('background-color', 'white');
    $('.servicesBtn').closest('div').css('background', 'white');


    //$('li:first-of-type').css('background', 'yellow');
    // $('li:only-of-type').css('background', 'orange');
    // $('li:contains("Crush")').css('background', 'blue');
    // $('li:empty').css('background', 'lightblue');
    // $('li:has("h4")').css('background', 'orange');
    // $('li:nth-child(3)').css('background', 'gray');
    
    
    
    // $('li:first').css('background-color', 'red');
    // $('li:last').css('background-color', 'green');
    // $('li:even').css('background-color', 'orange');
    // $('li:odd').css('background-color', 'yellow');
    // $('li:eq(3)').css('background-color', 'green');


    // $('#alcoveLogo').css('opacity', 0.4);
    // $('.servicesBtn').css('color', '#fff');
    // $('button').css('border', '1px solid green');
    // $('h2').css('border', '1px solid green');
    // $('input[name="nameVal"]').css('border', '1px solid red');
    // $('input[name!="phoneNum"]').css('border', '1px solid green');
    // $('input[name*="Num"]').css('border', '1px solid pink');



    // var element = document.getElementById('alcoveLogo');
    // element.style.opacity = 0.2;

    // var elements = document.getElementsByClassName('servicesBtn');

    // for(var i = 0; i < elements.length; i++) {
    //     if(i % 2 == 0) {
    //         elements[i].style.color = 'rgb(0, 106, 255)';
    //     }
    // }

    // var e = document.getElementsByTagName('h2');
    // for(var i = 0; i < e.length; i++) {
    //     e[i].style.borderColor = 'rgb(255, 0, 0)';
    //     e[i].style.borderWidth = '2px';
    //     e[i].style.borderStyle = 'solid';
    //     e[i].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
    // }

    // var el = document.querySelector(".navigation > li:nth-child(3) > a");
    // el.style.color = 'rgb(255, 0, 0)';


    // var ele = document.querySelectorAll('.navigation > li:nth-child(even) > a');
    // for (var i = 0; i < ele.length; i++) {
    //     ele[i].style.color = 'rgb(255, 0, 0)';
    // }

}