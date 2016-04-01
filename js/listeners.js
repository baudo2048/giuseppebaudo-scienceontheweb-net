(function(){
	// Add listener to every tag in the page
	document.addEventListener('click', click_handlers, false);	
})();

(function(){
	//alert('hello self invoked function');

	//SINGOLO LISTENER ASSOCIATO AD UN SINGOLO ELEMENTO
	//document.getElementById('searchBtn').addEventListener('click', searchStart, false);
	//document.getElementById('selElementModalSave').addEventListener('click', selElementModalSave_handler, false)
	
	//SINGOLO LISTENER ASSOCIATO AD UN GRUPPO DI ELEMENTI
	var liTags = document.getElementsByTagName('li');
	for(i=0;i<liTags.length;i++){
		liTags[i].addEventListener('click', li_clicked, false);
	}

	// STORE/MODEL
	//INIT SETTINGS
	$('#scrapingSection').hide();
	$('#waitingSection').hide();
	
})();


function searchStart(evt){
	

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
			searchStart(event);
		});
		// visto quello che succede prima, da qui in poi non faccio nulla?
	});



	// Add listener to every tag in the page
	//document.get.addEventListener('click', addSelectedClass_handler, false);

}

function li_clicked(evt) {
	//alert('hello li clicked');
	//alert(evt.target.textContent);
}

function selElementModalSave_handler(){
	//hide the selElementModal
	//$('#selElementModal').modal({ show: false});   //sembra funzionare anche senza questa riga


}

function addSelectedClass_handler (evt) {

	$(evt.target).addClass('selected');
	
	//alert((evt.target.outerHTML));
	$('#selElementText').html(evt.target.outerHTML);
	$('#selElementModal').modal('show');
}

function click_handlers(evt){
	switch(evt.target.id){
		case 'searchBtn':
			searchStart(evt);
			break;

		case 'selElementModalSave':
			selElementModalSave_handler(evt);
			break;

		case 'selElementText':
			//do nothing
			break;

		case 'closeModalBtn':
			//do nothing
			break;

		case 'textToSearch':
			//do nothing
			break;
		default:
			//addSelectedClass_handler (evt);
			//do nothing
	}
}


