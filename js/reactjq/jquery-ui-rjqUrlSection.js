(function( $ ) {

    $.fn.rjqUrlSection = function(options){
        var settings = $.extend({
        	h1: 'Inserisci un nuovo link in banca dati'
            visible: false
        }, options);
        var that = this;

        
        // TEMPLATE
        $(this).html(`
			<div class="section">               					
				<div class="container ">        					
					<div class="row ">          					
						<div class="col-md-12 ">					
							<h1 data-reactjq-id="h1" class="text-primary "></h1>
							<ul data-rjq-id="formUrl"></ul>
						</div>									
					</div>										
				</div>											
			</div>
        `);

        $('[data-reactjq-id="h1"]').html(settings.h1);

        $('[data-rjq-id="formUrl"]').formUrl({
            resultComponent: function(){
                alert('saved');
            }
        });

        return this;
    };     
 
}( jQuery ));