$(document).ready(()=>{


	const weatherApi = 'http://api.openweathermap.org/data/2.5/weather';
	const forecastApi = 'http://api.openweathermap.org/data/2.5/forecast';


	// const apiKey = 'cc7d926c57e64289106e5393bd197b3b'; 

	$(".item-").hide(); 
	$("#c1").hide(); 
	// $("#weather-canvas").hide();
	$("#triangle1").hide();

	// $(".try").hide(); 


	$('#weather-form').submit(function(event){
		event.preventDefault();
		var zipCode = $('#zip-code').val();
		var weatherUrl = `${weatherApi}?zip=${zipCode},us&units=imperial&appid=${apiKey}`;
		var forecastUrl = `${forecastApi}?zip=${zipCode},us&units=imperial&appid=${apiKey}`;
		console.log(forecastUrl);  
		// var weatherUrl = weatherApi + '?zip=' + zipCode+ ',us&appid ='+ apiKey; 

		console.log(weatherUrl);
		// $("#weather-canvas").show();
		

		 // if( $( ".item" ).is( ":hidden" ) ) {
   // 					 $( ".item" ).show( "5000" );
  	// 		} else {
   // 				 $( ".item" ).slideUp('5000');
 		//  	}

 		//  	$( "div" ).click(function() {
  	// 			var color = $( this ).css( "background-color" );
  	// 		$( "#result" ).html( "That div is <span style='color:" +
   //  			color + ";'>" + color + "</span>." );
			// });


			// $( ".try" ).animate({
			// 	opacity: 0.6,
			//     top: "+=50",
			//     height: "toggle",
			//     transition: "opacity 1s ease-in-out"

			//   }, 5000, function() {
			//     // Animation complete.
			//   });

			// $( ".item" ).css({
			// 	opacity: 0.6,
			//     top: "+=50",
			//     height: "toggle",
			//     transition: "opacity 1s ease-in-out"
			//   }, 5000, function() {
			//     // Animation complete.
			//   });



		


		$.getJSON(weatherUrl,(weatherData)=>{
			console.log(weatherData)
			var currTemp = weatherData.main.temp; 
			var temps = {
				curr: weatherData.main.temp,
				max: weatherData.main.temp_max,
				min: weatherData.main.temp_min,
			}
			var name = weatherData.name;
			var sunrise = new Date ((weatherData.sys.sunrise) *1000); 
			var newSunRise = sunrise.toTimeString();
			var sunset = new Date ((weatherData.sys.sunset) *1000); 
			var newSunSet = sunset.toTimeString();
			var maxTemp = weatherData.main.temp_max;
			var minTemp = weatherData.main.temp_min;

			console.log(sunset);
			console.log(newSunSet);

			$("#triangle1").toggle();
			$("#c1").toggle();

			// $('.max-temp').html(weatherHighDataHTML).animate({
			// 	opacity: 0.6,
			// 	top: '400px',
			//     transition: "opacity 3s ease-in-out",
			   

			//   }, 3000, function() {
			//     // Animation complete.
			//   }).css({
			//   		'font-weight': "bold"

			//   }); 


			var icon = '<img src = "http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png'; 
			// var icon = weatherData.weather[0].icon; 
			var desc = weatherData.weather[0].description;
			// var newHTML = '<img src = "http://openweathermap.org/img/w/'+icon+'">' +desc;
			
			var newCurrHTML = '';  
			newCurrHTML  += '<div class ="currTemp"> ' + Math.floor(currTemp) + '&deg;F</div>';
			$('.temp-info').html(newCurrHTML);


			var newNameHTML = "";
			newNameHTML  += '<div class ="name"> '+ name +'</div>';
			$('.name').html(newNameHTML);


			var newDescHTML = "";
			newDescHTML  += '<div class ="name"> '+ desc +'</div>';
			$('.desc').html(newDescHTML);


		
			currentPercent = 0;

			var newSunHTML = '';
			newSunHTML += '<div class = "sun"> Sunrise ' + newSunRise.slice(1,-18) + ' AM' + '<br/>' + 'Sunset ' + newSunSet.slice(0,-18) + ' PM' +'</div>'
			$('.sun').html(newSunHTML);

			var newMaxTempHTML = '';
			newMaxTempHTML += '<div class = "max-temp"> High ' + Math.floor(maxTemp) +'&deg;F</div>';
			$('.max-temp').html(newMaxTempHTML);

			var newMinTempHTML = '';
			newMinTempHTML += '<div class = "min-temp"> Low ' + Math.floor(minTemp) +'&deg;F</div>';
			$('.min-temp').html(newMinTempHTML);



			animateCircle(0, currTemp);
		});
		
		// console.log('User submitted the form');
		// body...
		//type submit automatically submits the form; no click listener needed

	 

		// $.getJSON(forecastUrl,(weatherData)=>{
		// 	console.log(weatherData)
		// 	var weatherDataHTML = getHTML(weatherData);

		// 	console.log(weatherDataHTML);
		// 	$('#five-day').html(weatherDataHTML);

		// 	function getHTML(data){
		// 		var newHTML = '';
		// 		for (let i = 3; i < data.list.length; i+=8){
		// 				//contains imageBaseUrl, the width of the image, add 
		// 				var getforcastLow = data.list[i].main.temp_min; 
		// 				newHTML += '<div class = "item -l">' + 'Lows ' + Math.floor(getforcastLow) + '&deg;</div>';	
		// 		} 
		// 		return newHTML;	

		// 	}

	
			// currentPercent = 0;
						


		$.getJSON(forecastUrl,(weatherData)=>{
			console.log(weatherData);
			var weatherHighDataHTML = getHighLowHTML(weatherData);
			// $(".item").slideUp(slow, function(){

			// }); 

			// console.log(weatherHighDataHTML);

			// var i = -1;
			// var panelList = $(".slide_panel");
			// console.log(panelList);
			// var animationCallback = function(){
			// 	if(++i < panelList.length){
			// 		$(panelList[i]).slideUp('slow', animationCallback);
			// 	};
			// 	animationCallback();
			// };



			// (function(){
			// 	if(arr[++i])
			// 		$(arr[i]).animate({left:"300px"}, 100, "linear", arguments.callee)
			// 	})();
			// });



			$('#five-day').html(weatherHighDataHTML).animate({
				opacity: 0.6,
				top: '400px',
			    transition: "opacity 3s ease-in-out",
			   

			  }, 3000, function() {
			    // Animation complete.
			  }).css({
			  		'word-spacing': "-1px",
			  		'text-align': 'center',
			  		'color': '#00994C'


			  });
			  					 




			// slideDown("4000");


			// css({
			// 	opacity: 0.6,
			//     top: "+=50",
			//     height: "toggle",
			//     transition: "opacity 1s ease-in-out"
			//   }, 5000, function() {
			//     // Animation complete.
			//   });

				function getHighLowHTML(data){
					var newHTML = '';
					for (let i = 0; i < data.list.length; i+=8){
							// console.log(data.list.length);
							var getforcastHigh = data.list[i].main.temp_max;
							var getforecastLow = data.list[i].main.temp_min;
							var getDate = new Date((data.list[i].dt) * 1000);
							// console.log(getDate); 
							var newDate = getDate.toUTCString();
							console.log(getDate); 
							console.log(newDate);

							var desc = data.list[i].weather[0].description

							var icon = '<img src = "http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png"/>'; 

							// console.log(getforcastHigh)
							// newHTML += '<div class = "item -h">' + getDate + 'Highs ' + Math.floor(getforcastHigh) + '&deg; </div>';
							newHTML += '<div class = "item-">' + newDate.slice(0,12) + '<br/>' + 'Highs ' + Math.floor(getforcastHigh) + '&deg;F' + ' Lows ' +  Math.floor(getforecastLow) + '&deg;F' + '<br/>' + desc + '<br/>' + icon + '</div>';
							// newHTML += '<div class = "item -l">' + 'Lows ' + Math.floor(getforecastLow) + '&deg;</div>';	
					}
					return newHTML;
			 	}

		});
	});

	
	
	var canvas = $('#weather-canvas');
	var context = canvas[0].getContext('2d'); 

	//get assumedTemperature from weather API
	var assumedTemperature = 65; 
	var currentPercent = 0; 



	function animateCircle(currentArc, currentTemp){

		//Draw inner circle 
		context.globalAlpha = 0.2; 
		context.fillStyle = "rgba(255, 153, 51, 0.1)";
		context.beginPath();
		context.arc(155, 75, 70, Math.PI*0, Math.PI*2);
		context.closePath(); 
		context.globalAlpha = 0.2;
		context.fillStyle = "rgba(255, 153, 51, 0.1)"; 
		context.fill(); 


		//draw the outer line
		//5px wide line
		context.lineWidth = 5;
		context.strokeColor = '#990099'; 
		context.beginPath(); 
		context.arc(155, 75, 75, Math.PI*1.5,(Math.PI * 2 * currentArc) + Math.PI*1.5); 
		context.stroke();

		//Update the current Percentage
		currentPercent++;
		if(currentPercent < currentTemp){
			requestAnimationFrame(function(){
				animateCircle(currentPercent/100, currentTemp);

			});
		}
		if(currentTemp <= 32){
			context.globalAlpha = 0.2;
			context.fillStyle = "rgba(0, 128, 255, 0.1)"; 
			context.fill();
		
		
		}else if(currentTemp >= 80){
			context.globalAlpha = 0.2; 
			context.fillStyle = "rgba(255, 0, 0, 0.1)";
			context.fill(); 


		}else{
			context.globalAlpha = 0.2;
			context.fillStyle = "rgba(255, 153, 51, 0.1)";
			context.fill(); 
		}
		

	};
	animateCircle(); 


	var canvas2 = $('#triangle1');
	var context2 = canvas2[0].getContext('2d');

	//filled Triangle
	context2.beginPath();
	context2.moveTo(75, 75);
	context2.lineTo(315, 65);
	context2.lineTo(65, 315);
	context2.closePath();
	//stroke style goes first
    context2.strokeStyle = "#9999ff";
    context2.stroke();
	// context2.fill()

	context2.closePath();
	context2.shadowColor = "rgba(153, 153, 255, 0.9)";
	context2.shadowBlur = 7;
	context2.shadowOffsetX = 1;
	context2.shadowOffsetY = -16;
	context2.fillStyle = "rgba(153, 153, 255, 0.3)";
	context2.fill();


	// stroked triangle
	
	context2.beginPath();
    context2.moveTo(325, 325);
    context2.lineTo(325, 75);
   	context2.lineTo(75, 325);
    context2.closePath();
    context2.strokeStyle = "#ff9999";
    context2.stroke();
   


	 
	context2.closePath();
	context2.shadowColor = "rgba(255, 153, 153, 0.9)";
	context2.shadowBlur = 7;
	context2.shadowOffsetX = 4;
	context2.shadowOffsetY = 10;
	context2.fillStyle = "rgba(255, 153, 153, 0.3)";
	context2.fill();

});


