var footerDate = new Date();
var day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var yr;

document.getElementById('footerDate').innerHTML =
    day[footerDate.getDay()] + ', ' +
    months[footerDate.getMonth()] + ' ' +
    footerDate.getDate() + ', ' +
    footerDate.getFullYear();