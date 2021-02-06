var imgArray = new Array();

imgArray[0] = new Image(); 
imgArray[0].src = 'dad.jpg';
imgArray[1] = new Image ();
imgArray[1].src = 'mom.jpg';
imgArray[2]= new Image ();
imgArray[2].src = 'Sanaya.png';
imgArray[3] = new Image ();
imgArray[3].src = 'samaira.png';

var names = ["Dad", "Mom", "Me(Sanaya)", "Samaira"];
 
var i=0;
function shownext () 
{ document.getElementById("name").innerHTML= names[i];
document.getElementById("album").src = imgArray[i].src;

i=i+1;
}

