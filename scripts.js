$(document).ready(()=>{
	console.log("hello");
	var canvas = document.getElementById('weather-canvas');
	var context = canvas.getContext('2d'); 

	//get assumedTemperature from weather API
	var assumedTemperature = 65; 

	function animateCircle(currentArc){

		//Draw inner circle 
		context.fillStyle = "#ccc";
		context.beginPath();
		context.arc(155, 75, 70, Math.PI*0, Math.PI*2);
		context.closePath();
		context.fill(); 


		//draw the outer line
		//5px wide line
		context.lineWidth = 5;
		context.strokeColor = '#ffff00'; 
		context.beginPath(); 
		context.arc(155, 75, 75, Math.PI*1.5,(Math.PI * 2 * currentArc)); 
		context.stroke();

		//Update the current Percentage
		var currentPercent++;
		if(currentPercent < assumedTemperature){
		
			requestAnimationFrame(function(){
			animateCircle(currentPercent/100);

			});

		}


	};
	animateCircle()

});


