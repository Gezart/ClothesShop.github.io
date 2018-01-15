                 
            var canvas=document.getElementById('canvass');
            var ctx=canvas.getContext('2d');
            ctx.stokeStyle = '#28d1fa';
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            
            
            function degToRad(degree){
                 var factor=Math.PI/180;
                 return degree*factor;
            }
            function renderTime(){
    
                var now = new Date();
                var today = now.toDateString();
                var time = now.toLocaleTimeString();
                var hours = now.getHours();
                var minutes = now.getMinutes();
                var seconds = now.getSeconds();
                var milliseconds = now.getMilliseconds();
                var newSeconds = seconds + (milliseconds/1000);
            //Background
               var g = ctx.createLinearGradient(300, 30, 300, 300);
               g.addColorStop(.0, "white");
               g.addColorStop(1 , "white");
               ctx.fillStyle = g;
               ctx.fillRect(0, 0, 230,230);
               
            //Hours
               ctx.beginPath();
               ctx.arc(100,100,60,degToRad(270),degToRad((hours*15)-90));
               ctx.stroke();
    
            //Minutes
              ctx.beginPath();
              ctx.arc(100,100,50,degToRad(270),degToRad((minutes*6)-90));
              ctx.stroke();
    
            //Seconds
              ctx.beginPath();
              ctx.arc(100,100,40,degToRad(270),degToRad((newSeconds*6)-90));
              ctx.stroke();
 
            //Date
              ctx.fontStyle = '2px Areal';
              ctx.fillStyle = '#401203';
              ctx.fillText(today , 63,100);
    
            //Time
              ctx.fontStyle = '1px Areal';
              ctx.fillStyle = '#401203';
              ctx.fillText(time , 63,110);
            }
              setInterval(renderTime ,40);


var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();
