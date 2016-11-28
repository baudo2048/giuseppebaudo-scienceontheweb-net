$(document).ready(function(){
	$('[data-rjq-component-id="rjqNavbar"]').rjqNavbar({
		resultComponent: function(){			//search on click
			// MOSTRARE FORM
			
			// NASCONDERE IL RESTO			
		}
	});

	$('[data-rjq-component-id="rjqSearchSection"]').rjqSearchSection({
		resultComponent: function(){			// input on keypress!!!
			// VISUALIZZO I RISULTATI
		}
	});


});