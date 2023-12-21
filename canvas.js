var canvas = new fabric.Canvas('drawingCanvas', {
    isDrawingMode: true,
    backgroundColor: 'rgba(0,0,0,0)',
});

var colorWheel = document.getElementById('colorWheel');
colorWheel.addEventListener('click', function() {
    var color = getWheelColor();
    canvas.freeDrawingBrush.color = color;
});

function getWheelColor() {
    var ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = colorWheel.style.backgroundColor;
    ctx.fillRect(0, 0, 1, 1);
    var pixel = ctx.getImageData(0, 0, 1, 1).data;
    return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
}
