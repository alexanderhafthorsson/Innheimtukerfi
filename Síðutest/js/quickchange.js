var helpdesk = document.getElementById('tool');
var smalltext = document.getElementById('smalltext');
var map = {}; 
var breyta1 = document.getElementsByClassName("style1");
var breyta2 = document.getElementsByClassName("style2");
var breyta3 = document.getElementsByClassName("style3");
onkeydown = onkeyup = function(e){
    map[e.keyCode] = e.type == 'keydown';
   	if(map[16] == true && map[83] == true)
   	{
   		helpdesk.classList.toggle("hide");
   	}

}




function breytaLitATexta(event)
{
	var val = smalltext.value;
	val = val.substring(1);
	val = val + 5050;
	val = "#"+val;




	for (var i = 0; i < 5; i++) {
		breyta1[i].style.backgroundColor = smalltext.value;;
		breyta2[i].style.backgroundColor = val;
		breyta3[i].style.backgroundColor = smalltext.value;;
	}

};

smalltext.addEventListener("change",breytaLitATexta,false);




