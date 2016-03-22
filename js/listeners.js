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
	//alert('hello');
	var textToSearch = document.getElementById('textToSearch').value;
	//alert (textToSearch);
	//var sectionClasses = document.getElementsByClassName('section');
	//for (i=0;i<sectionClasses.length;i++){
	//	$(sectionClasses).addClass('removed');
	//}
	if(textToSearch==''){
		$('#jumbotron').removeClass('removed');
	} else {
		$('#jumbotron').addClass('removed');
	}
	
}

function li_clicked(evt) {
	//alert('hello li clicked');
	alert(evt.target.textContent);
}