(function( $ ) {
	$.fn.rjqUrlList = function(coll, query){
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
   
}( jQuery ));