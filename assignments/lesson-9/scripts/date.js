var footerDate = new Date();
var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var yr;

document.getElementById('footerDate').innerHTML =
    day[footerDate.getDay()] + ', ' +
    months[footerDate.getMonth()] + ' ' +
    footerDate.getDate() + ', ' +
    footerDate.getFullYear();