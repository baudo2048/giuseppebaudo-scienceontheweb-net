(function( $ ) {

    $.fn.rjqSearchSection = function(options){
        var settings = $.extend({

        }, options);
        var that = this;

        
        // TEMPLATE
        $(this).html(`
	<div class="section">               					
		<div class="container">
			<div class="row ">				
				<div class="col-md-2"></div>        					
				<div class="col-md-8">
					<div data-rjq-component-id="rjqSearchForm"></div>			
				</div>	
				<div class="col-md-2"></div> 
			</div>	
		</div>                        					
	</div>
        `);

        $('[data-rjq-component-id="rjqSearchForm"]').rjqSearchForm({});
        return this;
    };    


 
}( jQuery ));