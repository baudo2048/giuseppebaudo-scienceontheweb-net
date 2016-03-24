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

	
	$('#doodleRow').fadeOut();
	$('#githubSection').hide();
	$('#researches').hide();
	$('#projects').hide();
	$('#cv').hide();
	
	
}

function li_clicked(evt) {
	//alert('hello li clicked');
	//alert(evt.target.textContent);
}


