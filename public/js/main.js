$(document).ready(function(){
	function showMap() {
		window.location = 'http://calm-earth-7787.herokuapp.com/main.html'
	}

	document.getElementById("map_button").addEventListener(
		"click", showMap()
	);
})