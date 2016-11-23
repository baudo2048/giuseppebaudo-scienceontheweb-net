$(document).ready(function(){
	// hera userip contain local ip address.
	// more info on https://l2.io/

	// to see list of userip please follow rest: 
	// https://api.mlab.com/api/1/databases/baudo2048/collections/analytics?apiKey=sRlJ7RW1HNf0iR7-RDx5TyurrVhjCA7c
    // finally find info about ip address: http://www.infobyip.com/
    // or better http://ipinfo.io/
	// I need to save this data!!!
	function insertDocument(doc,coll){
        var user = getCookie('baudo2048user');
    	// prepare doc to store
    	var docToStore = {
    		type: 'clientip',
    		user: user,				
    		ipinfo: doc
    	};

    	var baseUri = 'https://api.mlab.com/api/1',
            apiKey = 'sRlJ7RW1HNf0iR7-RDx5TyurrVhjCA7c',
            db_name = 'baudo2048';

        $.ajax( { 
            url: baseUri + "/databases/"+db_name+"/collections/"+coll+"?apiKey="+apiKey,
            data: JSON.stringify( docToStore ),
            type: "POST",
            contentType: "application/json" } );
    }



    insertDocument(userip,'analytics');
	
});