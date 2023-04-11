function functionRock(){
var randomChoice = Math.floor((Math.random()*3)+1);
        if(randomChoice==1){
                document.querySelector("img.rps-img-1").src="images/rock.jpg";
				document.querySelector("img.rps-img-3").src="images/rock.jpg";
				document.querySelector("img.rps-img-2").src="images/vs.png";
				document.querySelector("img.image-thumbs").src="images/draw.jpg";
        }
        else if(randomChoice==2){
				document.querySelector("img.rps-img-1").src="images/rock.jpg";
				document.querySelector("img.rps-img-3").src="images/scissors.jpg";
				document.querySelector("img.rps-img-2").src="images/vs.png";
				document.querySelector("img.image-thumbs").src="images/win.jpg";
        }
        else if(randomChoice==3){
				document.querySelector("img.rps-img-1").src="images/rock.jpg";
				document.querySelector("img.rps-img-3").src="images/paper.jpg";
				document.querySelector("img.rps-img-2").src="images/vs.png";
				document.querySelector("img.image-thumbs").src="images/lose.png";
		}
	
}
function functionPaper(){
	var randomChoice = Math.floor((Math.random()*3)+1);
        if(randomChoice==1){
                document.querySelector("img.rps-img-1").src="images/paper.jpg";
				document.querySelector("img.rps-img-3").src="images/rock.jpg";
				document.querySelector("img.rps-img-2").src="images/vs.png";
				document.querySelector("img.image-thumbs").src="images/win.jpg";
        }
        else if(randomChoice==2){
				document.querySelector("img.rps-img-1").src="images/paper.jpg";
				document.querySelector("img.rps-img-3").src="images/scissors.jpg";
				document.querySelector("img.rps-img-2").src="images/vs.png";
				document.querySelector("img.image-thumbs").src="images/lose.png";
        }
        else if(randomChoice==3){
				document.querySelector("img.rps-img-1").src="images/paper.jpg";
				document.querySelector("img.rps-img-3").src="images/paper.jpg";
				document.querySelector("img.rps-img-2").src="images/vs.png";
				document.querySelector("img.image-thumbs").src="images/draw.jpg";
		}
}
function functionScossirs(){
	var randomChoice = Math.floor((Math.random()*3)+1);
        if(randomChoice==1){
                document.querySelector("img.rps-img-1").src="images/scissors.jpg";
				document.querySelector("img.rps-img-3").src="images/rock.jpg";
				document.querySelector("img.rps-img-2").src="images/vs.png";
				document.querySelector("img.image-thumbs").src="images/lose.png";
        }
        else if(randomChoice==2){
				document.querySelector("img.rps-img-1").src="images/scissors.jpg";
				document.querySelector("img.rps-img-3").src="images/scissors.jpg";
				document.querySelector("img.rps-img-2").src="images/vs.png";
				document.querySelector("img.image-thumbs").src="images/draw.jpg";
        }
        else if(randomChoice==3){
				document.querySelector("img.rps-img-1").src="images/scissors.jpg";
				document.querySelector("img.rps-img-3").src="images/paper.jpg";
				document.querySelector("img.rps-img-2").src="images/vs.png";
				document.querySelector("img.image-thumbs").src="images/win.jpg";
		}
}