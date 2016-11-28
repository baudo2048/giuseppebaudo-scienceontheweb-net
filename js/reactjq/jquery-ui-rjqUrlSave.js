(function( $ ) {
    $.fn.rjqUrlSave = function(coll, tag, url, title, descr, user){
        var that = this;

        //settings da implementare
        var setting = $.extend({
            collection: '',
            tag: '',
            url: '',
            title: '',
            descr: '',
            user: ''
        },options);

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
 
}( jQuery ));