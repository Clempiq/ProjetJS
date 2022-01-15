

function showCanva(){
    $("canvas").addClass('show');
    $("#valid").removeClass();
}

function reservez(){
    $('canvas').removeClass("show");
    $('canvas').addClass("canvas");
    $("#name")[0].reset();
    $("#text").html("<h3>Vous avez réservé le vélo n°" + localStorage["vélo"])
    $("#minu").removeClass()

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.text(minutes + ":" + seconds);
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    
    jQuery(function ($) {
        var fiveMinutes = 60 * 20,
            display = $('#time');
        startTimer(fiveMinutes, display);
    });
    
    

}




var painting = false;

var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

canvas.addEventListener("mousedown", down);

canvas.addEventListener("mouseup", toggledraw);

canvas.addEventListener("mousemove", 

    function (evt) {
    var mousePos = getMousePos(canvas, evt);
    var posx = mousePos.x;
    var posy = mousePos.y;
    draw(canvas, posx, posy);
});

function down () {
    painting = true;
    context.beginPath();
}

function toggledraw () {
    painting = false;
    canvas.style.cursor = "default";
}

function getMousePos(canvas, evt){
    var rect = canvas.getBoundingClientRect();
    return{
        x:evt.clientX - rect.left,
        y:evt.clientY - rect.top
    };
}

function draw(canvas, posx, posy){
    if(painting){
        context.fillRect(posx, posy, 1, 1);
        context.lineTo(posx, posy);
        canvas.style.cursor = "pointer";
        context.stroke();
    }
}


