(function(){
	//alert('hello self invoked function');

	//SINGOLO LISTENER ASSOCIATO AD UN SINGOLO ELEMENTO
	document.getElementById('textToSearch').addEventListener('keyup', searchStart, false);
	
	//SINGOLO LISTENER ASSOCIATO AD UN GRUPPO DI ELEMENTI
	var liTags = document.getElementsByTagName('li');
	for(i=0;i<liTags.length;i++){
		liTags[i].addEventListener('click', li_clicked, false);
	}
	
})();


function searchStart(evt){

	var textToSearch = document.getElementById('textToSearch').value;

	$('#jumbotron').hide();
	$('#about').hide();
	$('#researches').hide();
	$('#projects').hide();
	$('#cv').hide();
	
	
}

function li_clicked(evt) {
	//alert('hello li clicked');
	//alert(evt.target.textContent);
}


//DOODLE
$(document).ready(function (){
	var canvas = document.getElementById('doodle'),
	context = canvas.getContext('2d');
	canvas.width=600;
	canvas.height=347;
  	base_image = new Image();
  	base_image.src = './img/doodles/doodle1/doodle.jpg';
  	context.drawImage(base_image, 0, 0);

});