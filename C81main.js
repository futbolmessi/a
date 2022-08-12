canvas=document.getElementById("dibujo1");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=8;
ctx.rect(80,70,160,160);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(messi){
color=document.getElementById("a").value;
console.log(color);
mouse_x = messi.clientX - canvas.offsetLeft; 
mouse_y = messi.clientY - canvas.offsetTop; 
console.log("X = " + mouse_x + " ,Y = " + mouse_y); 
rect(mouse_x , mouse_y);
}
function rect(mouse_x , mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=8;
    ctx.rect( mouse_x,mouse_y,160,160);
    ctx.stroke();
}

function j(){
ctx.clearRect(0, 0, canvas.width, canvas.height);    
}




