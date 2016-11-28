(function( $ ) {

    $.fn.rjqResultSection = function(options){
        var settings = $.extend({
        	h1: 'title'
        }, options);
        var that = this;

        
        // TEMPLATE
        $(this).html(`
			<div class="section">               					
				<div class="container ">        					
					<div class="row ">          					
						<div class="col-md-12 ">					
							<h1 data-reactjq-id="h1" class="text-primary "></h1>
							<ul data-rjq-component-id="viewResult"></ul>
						</div>									
					</div>										
				</div>											
			</div>
        `);

        $('[data-reactjq-id="h1"]').html(settings.h1);

        return this;
    };     
 
}( jQuery ));
