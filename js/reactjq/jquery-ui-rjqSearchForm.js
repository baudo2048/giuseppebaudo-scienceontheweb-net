(function( $ ) {

    $.fn.rjqSearchForm = function(options){
        var settings = $.extend({
            resultComponent         : function(){
                console.log('nessun componente passato');
            }
        }, options);

        var that = this;

        
        // TEMPLATE
        $(this).html(`
					<div class="input-group input-group-lg" style="width:100%;">
						<input data-reactjq-id="input" id="textToSearch" type="text" class="form-control" placeholder="start typing ...">
						<span class="input-group-btn">
							<!-- <button data-reactjq-id="button" id="searchBtn" class="btn btn-default" type="button">cerca</button> -->							
						</span>
					</div>
        `);

        $('[data-reactjq-id="button"]').on('click', function(){

        });

        $('[data-reactjq-id="input"]').keypress(function(e){
            if(e.which == 13) {
                // devo cercare i risultati da qualche parte
                // o chiamare il componente che ha i risultati

                settings.resultComponent();
            }
        });



        return this;
    };  


    
 
}( jQuery ));


/*
// demo
$(document).ready(function(){

    $('[data-reactjq-component="search"]').rjqsearch({
        resultComponent: function(){
            $('[data-rjq-id="viewResult"]').listurl('links', {});
        }
    });

    $('[data-rjq-id="formUrl"]').saveurlui({
        callback: function(){
            $('[data-rjq-id="viewResult"]').listurl('links', {});
        }
    });
});
*/