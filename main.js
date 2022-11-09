var canvas = document.getElementById("meu_canvas");
var contexto = canvas.getContext("2d");

contexto.beginPath();
contexto.strokeStyle="blue";
contexto.lineWidth=1;
contexto.rect(285, 200, 430, 200);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle="blue";
contexto.lineWidth=2;
contexto.arc(380, 260, 40, 0, 360);
contexto.stroke();

var cor2 = "yellow";

contexto.beginPath();
contexto.strokeStyle=cor2;
contexto.lineWidth=2;
contexto.arc(430, 300, 40, 0, 360);
contexto.stroke();

var cor3 = "black";

contexto.beginPath();
contexto.strokeStyle=cor3;
contexto.lineWidth=2;
contexto.arc(480, 260, 40, 0, 360);
contexto.stroke();


var cor4 = "green";

contexto.beginPath();
contexto.strokeStyle=cor4;
contexto.lineWidth=2;
contexto.arc(530, 300, 40, 0, 360);
contexto.stroke();

var cor5 = "red";

contexto.beginPath();
contexto.strokeStyle=cor5;
contexto.lineWidth=2;
contexto.arc(580, 260, 40, 0, 360);
contexto.stroke();