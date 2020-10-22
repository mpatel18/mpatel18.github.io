// Collapse on Navbar click
$('.navbar-nav li a').on('click', function(){
    if(!$( this ).hasClass('dropdown-toggle')){
        $('.navbar-collapse').collapse('hide');
    }
});

//Create Canvas Background 
const STAR_COUNT = 200; 
let dpi = window.devicePixelRatio; 

var canvas = document.getElementById('Home'),
    context = canvas.getContext('2d');

function resize(){
    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2); 
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2); 

    canvas.setAttribute('height', style_height * dpi); 
    canvas.setAttribute('width', style_width * dpi); 
}

function draw() {
    resize(); 

    for (var i = 0; i < STAR_COUNT; i++) {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
        context.fillStyle = "white";
        context.fillRect(x,y,1,1);
    }
    
    for (var i = 0; i < STAR_COUNT; i++) {
        var x = Math.random() * canvas.width;
        y = Math.random() * canvas.height,
        radius = Math.random() * 1.2;
        context.beginPath();
        context.arc(x, y, radius, 0, 360);
        context.fillStyle = "hsla(200,100%,50%,0.8)";
        context.fill();
    }
    
    context.fillStyle = "white"; 
    context.font = "30px Arial";
    context.textAlign = "center";
    context.fillText("Hi I'm Meekit Patel", canvas.width/2, canvas.height/2); 
}

requestAnimationFrame(draw);