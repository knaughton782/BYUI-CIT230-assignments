window.onload = function () {


    console.log($('input[type="text"]').css('background-color'));

   var toggleStyle = function () {

        var inputFields = $('input[type="text"]');
        if (inputFields.css('background-color') === 'rgb(255, 0, 0)' ) {
            inputFields.css('background-color', 'rgb(255, 255, 255)');
        } else {
            inputFields.css('background-color', 'rgb(255, 0, 0)');
        }
    }

    $('#ReqAQuoteBtn').click(toggleStyle);

}