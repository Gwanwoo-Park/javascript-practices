console.log(Rect.prototype);

window.addEventListener('load', function() {
	var rects = [
		new Rect(100, 100, 200, 300, "RGB(0, 0, 250)"), 
		new Rect(250, 250, 400, 400, "#0f0"),
		new Rect(300, 350, 500, 600, "#f00")];
	
	var index = 0;
	var intervalId;
	
	intervalId = setInterval(function() {
		if(index >= rects.length) {
			clearInterval(intervalId);
			return;
		}
		rects[index].show();
		console.log(rects[index].hasOwnProperty("x1"));
		
		index++;
		
	}, 1000);
	
});