// Collapse on Navbar click
$('.navbar-nav li a').on('click', function(){
    if(!$( this ).hasClass('dropdown-toggle')){
        $('.navbar-collapse').collapse('hide');
    }
});

//Create Canvas Background 
const STAR_COUNT = (window.innerWidth + window.innerHeight)/2; 
const mediaQuery = window.matchMedia('(max-width: 375px'); 

let dpi = window.devicePixelRatio; 

var canvas = document.getElementById('Home'),
    context = canvas.getContext('2d');

//Resize canvas to fit different screens
function resize(){
    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2); 
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2); 

    canvas.setAttribute('height', style_height * dpi); 
    canvas.setAttribute('width', style_width * dpi); 
}

//Randomly generate stars for Starfield background
function starfield(){

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
}

//Add title to canvas
function text() {
    context.fillStyle = "white"; 
    if(mediaQuery.matches){
        context.font = "40px Cousine";
    } else {
        context.font = "70px Cousine";
    }
    context.textAlign = "center";
    context.fillText("Hello I'm Meekit Patel", (canvas.width/2), (canvas.height/2)); 
}

//Draw on canvas
function draw() {
    resize(); 
    starfield(); 

    WebFontConfig = {
        google:{ families: ['Cousine'] },
        active: function(){text();},
    };
    (function(){
        var wf = document.createElement("script");
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js';
        wf.async = 'true';
        document.head.appendChild(wf);
    })();
}

requestAnimationFrame(draw);