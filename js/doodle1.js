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


      // begin custom shape
      context.beginPath();
      context.moveTo(170, 80);
      context.bezierCurveTo(130, 100, 130, 150, 230, 150);
      context.bezierCurveTo(250, 180, 320, 180, 340, 150);
      context.bezierCurveTo(420, 150, 420, 120, 390, 100);
      context.bezierCurveTo(430, 40, 370, 30, 340, 50);
      context.bezierCurveTo(320, 5, 250, 20, 250, 50);
      context.bezierCurveTo(200, 5, 150, 20, 170, 80);

      // complete custom shape
      context.closePath();
      context.lineWidth = 5;
      context.strokeStyle = 'blue';
      context.stroke();


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