// DOODLE 1

(function (){
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











    })();