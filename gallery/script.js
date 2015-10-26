window.addEventListener("load",function(){

var MAGIC_NUMBER = 13;
var MAGIC_NUMBER1 = 0;

var rowCounter = 0;

var imgCounter = 1;
var imgCounter1 = 1;
var imgCounter2 = 1;

var source = document.getElementById("thisImage");
var source1 = document.getElementById("thisImage1");
var source2 = document.getElementById("thisImage2");

var left = document.getElementById("previous");
var right = document.getElementById("next");

var left1 = document.getElementById("previous1");
var right1 = document.getElementById("next1");

var left2 = document.getElementById("previous2");
var right2 = document.getElementById("next2");

    function clickLeft(){
            rowCounter = 0;
            if (imgCounter == 1) {
                imgCounter = MAGIC_NUMBER;
            }
            imgCounter--;
            img = "img/zero/" + rowCounter + "_" + imgCounter + ".jpg";
            source.src = img;

            document.getElementById('image').innerHTML = imgCounter;
            console.log(imgCounter);
    }

    function clickRight(){
        rowCounter = 0;
        if (imgCounter == 12){
            imgCounter = MAGIC_NUMBER1;
        }
        imgCounter++;
        img = "img/zero/"+rowCounter+"_"+imgCounter+".jpg";
        source.src = img;

        document.getElementById('image').innerHTML = imgCounter;
    }


left.addEventListener("click", clickLeft);
right.addEventListener("click", clickRight);

left1.onclick = function(){
	rowCounter = 1;
		if (imgCounter1 == 1){
			imgCounter1 = MAGIC_NUMBER;
		}
	imgCounter1--;
	img = "img/one/"+rowCounter+"_"+imgCounter1+".jpg";
	source1.src = img;
	
	document.getElementById('image1').innerHTML = imgCounter1;
	document.getElementById('imageRow1').innerHTML = rowCounter;
};

right1.onclick = function(){
	rowCounter = 1;
		if (imgCounter1 == 12){
			imgCounter1 = MAGIC_NUMBER1;
		}
	imgCounter1++;
	img = "img/one/"+rowCounter+"_"+imgCounter1+".jpg";
	source1.src = img;
	
	document.getElementById('image1').innerHTML = imgCounter1;
};

left2.onclick = function(){
	rowCounter = 2;
		if (imgCounter2 == 1){
			imgCounter2 = MAGIC_NUMBER;
		}
	imgCounter2--;
	img = "img/two/"+rowCounter+"_"+imgCounter2+".jpg";
	source2.src = img;

	document.getElementById('image2').innerHTML = imgCounter2;

};

right2.onclick = function(){
	rowCounter = 2;
		if (imgCounter2 == 12){
			imgCounter2 = MAGIC_NUMBER1;
		}
	imgCounter2++;
	img = "img/two/"+rowCounter+"_"+imgCounter2+".jpg";
	source2.src = img;
	
	document.getElementById('image2').innerHTML = imgCounter2;
}


});