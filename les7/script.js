function logArrayElements(element, index, array) {
	  console.log('a[' + index + '] = ' + element);
	}

	// Note elision, there is no member at 2 so it isn't visited
	var numbers = [1, 5, , 9];
	numbers.forEach(logArrayElements);
// logs:
// a[0] = 1
// a[1] = 5
// a[3] = 9
// console.log(numbers.length); = 4



function loadJSON(url, callback){
	var speed = 5;
	var req = new XMLHttpRequest();
	var responseText = 'hay';

	req.open('GET', '../les5/student.json', true);

	req.addEventListener('readystatechange', function(){
		console.log(req.readyState);
		if (req.readyState == 4){
			if (req.status == 200){
				console.log(req.responseText);
				console.log(speed);
			} else {
				console.log("Error loading in page./n")
			}
		}
	});
	req.send();
};


function setData (){
	console.log(5);
}
loadJSON("http://localhost/leerjaar2/periode1/pro/les6/index.html", setData);	
