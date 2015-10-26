window.addEventListener("load",function(){


// we maken een xmlHTTPRequest aan
var req = new XMLHttpRequest();
// welke url moet er worden opgehaald?
req.open('GET', 'student.json', true);

// we voegen een 'listener' toe om te kijken of de pagina geladen is
req.addEventListener('readystatechange', function () {
  if (req.readyState == 4) {
     if(req.status == 200){
          console.log(req.responseText);
     } else {
          console.log("Error loading page\n");
     }
  }
});
// we starten het laden van de pagina
req.send();






// var picture = { 
// 		favouriteAnimal: "hedgehog",
// 		picture: "http://www.grappigplaatje.nl/wp-content/uploads/2013/09/Grappig-Plaatje-beheerder-team-aan-het-werk.jpg"
// };
// var student = {
// 	name: "Isabel",
// 	age: 17,
// 	subjects: [
// 		{
// 			subject: "Nederlands",
// 			teacher: "Trompetter"
// 		},
// 		{
// 			subject: "Engels",
// 			teacher: "Schoneman"
// 		},
// 		{
// 			subject: "Rekenen",
// 			teacher: "Hommels"
// 		}
// 	]
// };

// var json = JSON.stringify(student);
// var yolo = JSON.stringify(picture);
// console.log(json);
// console.log(yolo);


});