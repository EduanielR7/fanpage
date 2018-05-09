//alert("Hi");

var numOfPic = 7;
var currentPic = 0;

function hidePics(){

	for(var i=1; i < numOfPic; i++)
	{

		var picName = "image" + i;
		document.getElementById(picName).style.display = "none";
	}

}


hidePics();