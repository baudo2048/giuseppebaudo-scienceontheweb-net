(function(){
	//alert('hello self invoked function');

	//SINGOLO LISTENER ASSOCIATO AD UN SINGOLO ELEMENTO
	document.getElementById('searchBtn').addEventListener('click', searchStart, false);
	
	//SINGOLO LISTENER ASSOCIATO AD UN GRUPPO DI ELEMENTI
	var liTags = document.getElementsByTagName('li');
	for(i=0;i<liTags.length;i++){
		liTags[i].addEventListener('click', li_clicked, false);
	}

	//INIT SETTINGS
	$('#scrapingSection').hide();
	
})();


function searchStart(evt){

	var textToSearch = document.getElementById('textToSearch').value;

	
	$('#doodleRow').fadeOut();
	$('#githubSection').fadeOut();
	$('#researches').hide();
	$('#projects').hide();
	$('#cv').hide();
	$('#aboutSection').fadeOut();
	
	

	//ajax call that add scraping result
	var textToSearch = $('#textToSearch').val();
	$.ajax({
		url: "./php/scraper.php?textToSearch="+textToSearch,
	}).done(function (data){
		$('#scrapingResult').html(data);
		$('#scrapingSection').fadeIn();
	});
}

function li_clicked(evt) {
	//alert('hello li clicked');
	//alert(evt.target.textContent);
}


