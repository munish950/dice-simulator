var getImage = "image/dice.png";

function rolldice(){
	document.getElementById('roll-me').disabled = true;	    
	imgpath = document.getElementById('put-image');
	var random_number = null;
	var minimum = 0;
	var maximum = 0;
	// Create Random coordinates
	var coordinate = ["0 0", "-220px 0", "220px 0", "0 -220px", "-220px -220px", "220px 220px"];      
	maximum = (coordinate.length)-1;      

	//Delay loop execution    
	setDelayInterval(maximum, minimum, getImage, coordinate, minimum);    
}
	 
function setDelayInterval(maximum, minimum, getImage, coordinate, i){    
	if(i <= maximum){
		setTimeout(function () {
		var random_number = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

		imgpath.style.background = "url("+getImage+")"+coordinate[random_number]; 
		imgpath.style.width = "220px";
		imgpath.style.height = "220px";
		i++;

		setDelayInterval(maximum, minimum, getImage, coordinate, i);

		}, 250);
	}else{
		document.getElementById('roll-me').disabled = false;
	}
		 
}