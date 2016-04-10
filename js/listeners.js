// Adds listeners
(function(){
	// Add listener to every tag in the page
	document.addEventListener('click', click_handlers, false);	
	document.addEventListener('copy', copy_handlers,false);
})();

// Performs initial settings on user interface
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
	$('#viewAllPagesSection').hide();
	
})();


function click_handlers(evt){
	switch(evt.target.id){
		case 'searchBtn':
			jk.searchStart(evt);
			break;

		case 'addwordBtn':
			jk.addword(evt);
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
		case 'viewAllPages':
			evt.preventDefault();
			jk.viewAllPages(evt);
			break;
		default:
			//addSelectedClass_handler (evt);
			//do nothing
	}
}

function copy_handlers(evt){
	//evt.preventDefault(); 
	//alert('text copied' + evt.clipboardData.getData());
	//evt.clipboardData.setData('text/plain', 'Hello, world!');
	
}



function li_clicked (evt) {
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
