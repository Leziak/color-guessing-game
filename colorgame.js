var colors = [];
var squares = document.querySelectorAll(".square");
var randomColorDisplay = document.querySelector("#randomColorDisplay");
var newColors = document.querySelector("#new");
var header = document.querySelector("#header");
var update = document.querySelector("#update");

function newGame(){
	colors = [];
	for (var i=0;i<squares.length;i++){
		var randomColor = "RGB(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")";
		squares[i].style.backgroundColor = randomColor;
		colors.push(randomColor);
	}
	randomColorDisplay.textContent = colors[Math.floor(Math.random()*5)];
}

newGame();

newColors.addEventListener("click",newGame);

for (var i = 0;i<squares.length;i++){
	squares[i].addEventListener("click", function(){
		if (this.style.backgroundColor === randomColorDisplay.textContent.toLowerCase()){
			for (var j = 0;j < squares.length;j++){
				squares[j].style.backgroundColor = this.style.backgroundColor;
			}
			header.style.backgroundColor = this.style.backgroundColor;
		}else{
			this.style.backgroundColor = "#232323";
		}
	});
}

