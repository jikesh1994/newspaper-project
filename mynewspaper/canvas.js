var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
/* c.fillStyle="red";
c.fillRect(100,200,200,200);

c.fillStyle="magenta"
c.fillRect(400,200,200,200);

c.fillStyle="yellow"
c.fillRect(600,400,200,200);

c.fillStyle="orange"
c.fillRect(800,200,200,200);


c.fillStyle="magenta"
c.strokeRect(1000,400,200,200);
c.fillRect(1000,400,200,200); */

//for drawing a line

/* c.beginPath();
c.moveTo(600,400);
c.lineTo(600,100);
c.lineTo(400,200);
c.stroke();
 */
//for drawing Arc

/* c.beginPath();
c.arc(100,100,30,0,Math.PI*2,false);
c.strokeStyle="red";
c.stroke();
 */
 for(var i=0;i<100;i++)
 {
	 var x=Math.random()*window.innerWidth;
	 var y=Math.random()*window.innerHeight;
	 c.beginPath();
	 
	c.arc(x,y,40,0,Math.PI*2,false);
	c.strokeStyle="red";
	c.stroke();
	 
 }
 
 c.font="30px Arial";
 c.strokeStyle="green";
 c.strokeText("Welcome To Canvas",50,30);