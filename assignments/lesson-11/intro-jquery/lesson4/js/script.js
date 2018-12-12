window.onload = function () {

    //each assignment was commented out in order to do the next assignment but I got each to work before moving on to the next video.
    /**********************************************/

    var fruitBasket = [{ title: 'Apples', quantity: 20 },
    { title: 'Oranges', quantity: 25 },
    { title: 'Kiwis', quantity: 50 },
    { title: 'Strawberries', quantity: 45 },
    { title: 'Bananas', quantity: 10 },
    { title: 'Mangoes', quantity: 5 },
    { title: 'Tomatoes', quantity: 30 }
    ];

    $.each(fruitBasket, function (index, element) {
        $('.fruits').append(`<li>We have ${element.quantity} ${element.title}</li>`);
    })

    /**********************************************/

    // $('.dropdownMenu > li').hover(function () {
    //     $(this).children('ul').slideDown(200);
    // }, function () {
    //     $(this).children('ul').slideUp(200);
    // })
    // /**********************************************/

    // $('.toggleBtn').click(function () {
    //     $(this).toggleClass('toggleOn');
    // })

    // /**********************************************/

    // $('.navigation > li').hover(function () {

    //     $(this).toggleClass('openSesame');
    //     //executes on mouse hover
    //     $(this).addClass('openSesame');
    // }, function () {
    //     //     //executes on mouse leave
    //     $(this).removeClass('openSesame');

    //     // })

    //     /**********************************************/

    //     var box1 = $('.box1');
    //     var box2 = $('.box2');

    //     function leftToRight() {
    //         if (box2.html() == '') {
    //             box2.html(box1.html());
    //             box1.html('');
    //         }
    //     }

    //     $('#LeftToRight').click(leftToRight);
    //     function rightToLeft() {
    //         if (box1.html() == '') {
    //             box1.html(box2.html());
    //             box2.html('');
    //         }
    //     }

    //     // $('#RightToLeft').click(rightToLeft);

    //     /**********************************************/
    //     var nameVal = $('input[name="nameVal"]');

    //     function fillEmpty() {
    //         if (nameVal.val() == '') {
    //             nameVal.val('John Doe');
    //         }
    //     }
    //     $('#ReqAQuoteBtn').click(fillEmpty);

    //     /**********************************************/

    //     $('.coreValues').append("<li>This is a new list item</li>");
    //     $('<li>This is the appendto method list item</li>').appendTo(".coreValues");
    //     $('.coreValues').prepend('<li>Prepended item</li>');
    //     $('<li>This is the prependto method list item</li>').prependTo(".coreValues");

    //     /**********************************************/

    //     console.log($('input[type="text"]').css('background-color'));

    //     var toggleStyle = function () {

    //         var inputFields = $('input[type="text"]');
    //         if (inputFields.css('background-color') === 'rgb(255, 0, 0)') {
    //             inputFields.css('background-color', 'rgb(255, 255, 255)');
    //         } else {
    //             inputFields.css('background-color', 'rgb(255, 0, 0)');
    //         }
    //     }

    //     $('#ReqAQuoteBtn').click(toggleStyle);

    }