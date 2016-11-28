(function( $ ) {

    $.fn.rjqNavbar = function(options){
        var settings = $.extend({
          resultComponent: function(){}
        }, options);
        var that = this;

        
        // TEMPLATE
        $(this).html(`

     <div class="container">

      <!-- Static navbar -->
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="http://www.baudo.hol.es">Baudo.hol.es</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li><a href="http://www.baudo.hol.es">home</a></li>
              <li><a data-reactjs-id="nuovo" href="#">nuovo</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">

            </ul>
          </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
      </nav>
</div>
        `);

        $('[data-reactjs-id="nuovo"]').on('click', settings.resultComponent);

        return this;
    };     
 
}( jQuery ));