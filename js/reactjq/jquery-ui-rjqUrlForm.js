(function( $ ) {    
    $.fn.rjqUrlForm = function(options){
        var settings = $.extend({
            resultComponent         : function(){
                console.log('nessun componente passato');
            }
        }, options);

        var that = this;

        // solo renderer!!!!

        $(this).append(`

        	<style>
        	.label-red {
        		background-color:red;
        	}
        	</style>
            <label>collection</label>
            <input data-saveurlui-tag="collection" type="text"> 
            <label>tag</label>
            <input data-saveurlui-tag="tag" type="text">
            <label>url</label>
            <input data-saveurlui-tag="url" type="text">
            <label>title</label>
            <input data-saveurlui-tag="title" type="text">
            <label>descr</label>
            <input data-saveurlui-tag="descr" type="text">
            <label>user</label>
            <input data-saveurlui-tag="user" type="text" value="baudo81@gmail.com">
            <button data-saveurlui-ok="ok">save</button>

        `);

        $('[data-saveurlui-ok="ok"]').on('click', function(){
            $(this).rjqUrlSave(
                $('[data-saveurlui-tag="collection"]').val(),
                $('[data-saveurlui-tag="tag"]').val(),
                $('[data-saveurlui-tag="url"]').val(),
                $('[data-saveurlui-tag="title"]').val(),
                $('[data-saveurlui-tag="descr"]').val(),
                $('[data-saveurlui-tag="user"]').val()
            );

            settings.resultComponent();
        });

        return this;
    };  


    
 
}( jQuery ));