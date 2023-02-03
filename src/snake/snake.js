const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const stepSize = 25;
var x = 0;
var y = 0;
var lastX = 0;
var lastY = 0;
var xDir=1;
var yDir=0;
var length=1;
const width=500;
const height=500;
class Point2D {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
}
var body=[new Point2D(x,y)];
var inputs=[];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Math.clamp = function(value, min, max) {
    return Math.min(Math.max(value, min), max);
};
const maxW=Math.round((width-stepSize)/stepSize);
const maxH=Math.round((height-stepSize)/stepSize);
var food=new Point2D(Math.clamp(Math.round(getRandomInt(0,width)/stepSize),0,maxW)*stepSize,
                    Math.clamp(Math.round(getRandomInt(0,height)/stepSize),0,maxH)*stepSize);
function move() {
    var x = body[body.length-1].x;
    var y = body[body.length-1].y;

    x += xDir * stepSize;
    y += yDir * stepSize;

    if(x>width-stepSize)
    {
        x=0;
    }else if(x<0)
    {
        x=width;
    }else if(y>height-stepSize)
    {
        y=0;
    }else if(y<0)
    {
        y=width;
    }
    body.push(new Point2D(x,y));
    body.shift();
}
function handleInput()
{
    key=inputs.shift();
    if (key === "a") {
        xDir=-1;yDir=0;
    }
    else if (key === "d") {
        xDir=1;yDir=0;
    }
    else if (key === "w") {
        yDir=-1;xDir=0;
    }
    else if (key === "s") {
        yDir=1;xDir=0;
    }
}
function onKeyDown(event) {
    if (event.key === "a" || 
        event.key === "d" || 
        event.key === "w" || 
        event.key === "s") {
        if(!(inputs[inputs.length-1]===event.key))
        {
            inputs.push(event.key);
        }
    }
}
function draw() {
    ctx.fillStyle = 'beige';
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(food.x, food.y, stepSize, stepSize);
    ctx.fillStyle = 'green';
    for(var i=0;i<body.length;i++)
    {
        ctx.fillRect(body[i].x, body[i].y, stepSize, stepSize);
    }
    ctx.fillStyle = 'red';
    ctx.fillRect(body[body.length-1].x, body[body.length-1].y, stepSize, stepSize);
}
document.addEventListener("keydown", onKeyDown);

var frames=0;
function addPart()
{
    body.push(new Point2D(body[body.length-1].x,body[body.length-1].y));
}
function checkCollisions()
{
    /*Body*/
    for(var i=0;i<body.length-1;i++)
    {
        if(body[i].x==body[body.length-1].x && body[i].y==body[body.length-1].y)
        {
            body=[new Point2D(x,y)];
        }
    }
     /*Food*/
     if(body[body.length-1].x==food.x && body[body.length-1].y==food.y)
     {
         addPart();
         food=new Point2D(Math.clamp(Math.round(getRandomInt(0,width)/stepSize),0,maxW)*stepSize,
                     Math.clamp(Math.round(getRandomInt(0,height)/stepSize),0,maxH)*stepSize);
     }
}
function update() {
    frames++;

    if(frames>=15)
    {
        frames=0;
        checkCollisions();
        handleInput();
        move();
        draw();
    }
    requestAnimationFrame(update);
}
  
requestAnimationFrame(update);