(function(jk){


jk.searchStart = function (evt){
	

	var textToSearch = document.getElementById('textToSearch').value;

	// remove all sections
	$('#doodleRow').fadeOut();
	$('#githubSection').fadeOut();
	$('#researches').hide();
	$('#projects').hide();
	$('#cv').hide();
	$('#aboutSection').fadeOut();


	// clear former results
	$('#scrapingResult').html('');
	

	//add wainting image
	$('#waitingSection').fadeIn();	

	//ajax call that add scraping result
	var textToSearch = $('#textToSearch').val();
	$.ajax({
		url: "./php/scraper.php?textToSearch="+textToSearch,
	}).done(function (data){

		//remove waiting image
		$('#waitingSection').hide();

		// add scraping result to the dom and show it
		$('#scrapingResult').html(data);
		$('#scrapingSection').fadeIn();

		// formatto il risultato in modo da creare i riquadri per il contenuto
		$('#scrapingResult *').addClass('selectable');

		// questa funzione cattura tutti i click su link nel result
		$('#scrapingResult a').on('click', function(event){
			event.preventDefault();
			//alert($(this).attr('href'));
			$('#textToSearch').val($(this).attr('href'));
			jk.searchStart(event);
		});
		// visto quello che succede prima, da qui in poi non faccio nulla?
	});





};



jk.addword = function (evt){
	// cerca in wikidictionary the word
};


jk.viewAllPages = function (evt){
	// list all pages
	$.ajax({
		url: "./php/viewAllPages.php",
	}).done(function (data){
		
		// remove all sections
		$('#doodleRow').fadeOut();
		$('#githubSection').fadeOut();
		$('#researches').hide();
		$('#projects').hide();
		$('#cv').hide();
		$('#aboutSection').fadeOut();

		// add scraping result to the dom and show it
		$('#viewAllPagesCol').html(data);
		$('#viewAllPagesSection').fadeIn();
		
	});

}



}(window.jk || jk=window.jk : window.jk={}));