function randomize() {
    var colors = ['Red', 'Green', 'Yellow', 'Blue', 'Purple']
    return colors[parseInt(Math.random() * colors.length)];
}

function calculateDistance(x, y) {
    var symbolPositionX = 97;
    var symbolPositionY = 106;
    return Math.sqrt(((x - symbolPositionX) * (x - symbolPositionX)) + ((y - symbolPositionY) * (y - symbolPositionY)));
}

var statusDisplay = $('.status')