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


//DOODLE
$(document).ready(function (){
	var canvas = document.getElementById('doodle');
	var context = canvas.getContext('2d');
	canvas.width=600;
	canvas.height=347;


      var sources = {
        darthVader: 'http://www.baudo.hol.es/img/doodles/doodle1/doodle.jpg'
      };

      loadImages(sources, function(images) {
        context.drawImage(images.darthVader, 0, 0);
        
      });




});




      function loadImages(sources, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        // get num of sources
        for(var src in sources) {
          numImages++;
        }
        for(var src in sources) {
          images[src] = new Image();
          images[src].onload = function() {
            if(++loadedImages >= numImages) {
              callback(images);
            }
          };
          images[src].src = sources[src];
        }
      }