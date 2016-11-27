(function( $ ) {
	$.fn.listurl = function(coll, query){
        // costruisce un elenco puntato con i dati provenienti
        // dalla query.
        var that = this;
 
        var baseUri = 'https://api.mlab.com/api/1',
            apiKey = 'sRlJ7RW1HNf0iR7-RDx5TyurrVhjCA7c',
            db_name = 'baudo2048';


        $.ajax( {     
            url: baseUri + "/databases/"+db_name+"/collections/"+coll+"?apiKey="+apiKey+"&q="+JSON.stringify(query),
            type: "GET" 
        }).done(function (doc){
            console.log('listurl done');

            // per il momento doc è un array con i risultati
            for (var i=0;i<doc.length;i++){
                console.log('append');
                $(that).append('<li><a href="' + doc[i].url + '">' + doc[i].title + '</a></li>');
                
            }
        
        }); 
        return this;
	};


    $.fn.saveurl = function(coll, tag, url, title, descr, user){
        var that = this;

        var baseUri = 'https://api.mlab.com/api/1',
        apiKey = 'sRlJ7RW1HNf0iR7-RDx5TyurrVhjCA7c',
        db_name = 'baudo2048';


        var docToStore = {
            tag: tag,                         
            url: url,
            title: title,
            descr: descr,
            user: user
        };

        $.ajax( { 
            url: baseUri + "/databases/"+db_name+"/collections/"+coll+"?apiKey="+apiKey,
            data: JSON.stringify( docToStore ),
            type: "POST",
            contentType: "application/json" } );

        return this;
    };

  

    $.fn.saveurlui = function(){
        var that = this;

        // solo renderer!!!!

        $(this).append(`

        	<style>
        	.label-red {
        		background-color:red;
        	}
        	</style>
            <label class="label-red">tag</label>
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
            $(this).saveurl(
                'links',
                $('[data-saveurlui-tag="tag"]').val(),
                $('[data-saveurlui-tag="url"]').val(),
                $('[data-saveurlui-tag="title"]').val(),
                $('[data-saveurlui-tag="descr"]').val(),
                $('[data-saveurlui-tag="user"]').val()
            );
        });

        return this;
    };  


    
 
}( jQuery ));