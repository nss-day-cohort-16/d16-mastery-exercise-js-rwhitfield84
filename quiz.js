/***********************GET INPUTS*******************************/
var treeHeight = document.getElementById("height");
var leaves = document.getElementById("leaves");
var growButton = document.getElementById("grow");

/***********************TREE CONSTRUCTOR*******************************/

function Tree(height, character) {
	this.height = height;
	this.character = character;
}

var newTree = new Tree(treeHeight.value, leaves.value);

/***********************TREE FUNCTION*******************************/
function growTree (newTree) {
	if (treeHeight.value === "" || leaves.value === "") {
		alert("plant a seed dude");
	} else {
		var i = 0, j = 1, y = treeHeight.value;
   			console.log(" ".repeat(y));
   		while(i < y){
       		console.log(" ".repeat(y) + leaves.value.repeat(j));
	       j+=2;
	       y--;
	       i++;
   		}
   		alert("Check out your tree in the console (cmd+opt+j)");
	}
		
} 

/***********************EVENT LISTENERS*******************************/
growButton.addEventListener("click", function(event) {
	growTree();
	// console.log("event",event);
});

treeHeight.addEventListener("keypress", function(event) {
	var key = event.which || event.keyCode;
	if (key === 13) {
		growTree();
	}
	// console.log("event",event);
});

leaves.addEventListener("keypress", function(event) {
	var key = event.which || event.keyCode;
	if (key === 13) {
		growTree();
	}
	// console.log("event",event);
});








