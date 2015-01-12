/*
 *
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.

 */

function setDataToTransaction(namep, firstnamep, lastnamep, cellPhonep,cityp,enterprisep){
	var collectionName = 'perfil';    

    	    var collections = {
    	            perfil : {
    	                searchFields: {name: 'string', firstname: 'string', lastname: 'string', cellPhone: 'string',
    	                	city: 'string', enterprise: 'string'}
    	            } 
    	    };   
    	    
    	    WL.JSONStore.init(collections).then(function () {   			
   			   WL.JSONStore.get(collectionName).clear(); 
   		});
	  
     WL.JSONStore.init(collections)	 	  
	.then(function () {

		return WL.JSONStore.startTransaction();
	})

	.then(function () {

		// Handle startTransaction success.
		// You can call every JSONStore API method except:
		// init, destroy, removeCollection, and closeAll.
		
		// Data to add, you probably want to get
		// this data from a network call (e.g. Adapter).
		var data = [{name: namep.val().trim(), firstname: firstnamep.val().trim(), lastname: lastnamep.val().trim(), cellPhone: cellPhonep.val().trim(),
        	city: cityp.val().trim(), enterprise: enterprisep.val().trim()}];

		// Optional options for add.
		var addOptions = {

				// Mark data as dirty (true = yes, false = no), default true.
				markDirty: true
		};

		// Get an accessor to the people collection and add data.
		return WL.JSONStore.get(collectionName).add(data,addOptions);
	})
	.then(function () {

		return WL.JSONStore.commitTransaction();
	})
	.then(function () {
     	
       
     })
	.fail(function (errorObject) {		
		// Handle failure for any of the previous JSONStore operation.
		//(startTransaction, add, remove).

		WL.JSONStore.rollbackTransaction()

		.always(function () {
			
		});
	});

}


function setDataToPolicyTransaction(policyp, seriep, platesp, vehicleTypep,markp,submarkp,modelp,colorp,holderp,conductorp){
	var  collectionName = 'poliza'; 
	    
    	    var collections = {
    	            poliza : {
    	                searchFields: {policy: 'string', serie: 'string', plates: 'string', vehicleType: 'string',
    	                	mark: 'string', submark: 'string',model: 'string',color: 'string',holder: 'string',
    	                	conductor: 'string'}
    	            } 
    	    };    
    	    
    	     WL.JSONStore.init(collections).then(function () {
    			   WL.JSONStore.get(collectionName).clear(); 
    		});
	  
     WL.JSONStore.init(collections)	 	  
	.then(function () {
		return WL.JSONStore.startTransaction();
	})
	.then(function () {

		// Handle startTransaction success.
		// You can call every JSONStore API method except:
		// init, destroy, removeCollection, and closeAll.
		
		// Data to add, you probably want to get
		// this data from a network call (e.g. Adapter).
		var data = [{policy: policyp.val().trim(), serie: seriep.val().trim(), plates: platesp.val().trim(),
			vehicleType: vehicleTypep.val().trim(),	mark: markp.val().trim(),	submark: submarkp.val().trim(),			
			model: modelp.val().trim(), color: colorp.val().trim(),
			holder: holderp.val().trim(),conductor: conductorp.val().trim()}];

		// Optional options for add.
		var addOptions = {

				// Mark data as dirty (true = yes, false = no), default true.
				markDirty: true
		};

		// Get an accessor to the people collection and add data.
		return WL.JSONStore.get(collectionName).add(data,addOptions);
	})
	.then(function () {
		return WL.JSONStore.commitTransaction();
	})
	.then(function () {
     	WL.Logger.debug("Retrieve success" +  WL.JSONStore.get(collectionName));      
     })
	.fail(function (errorObject) {		
		// Handle failure for any of the previous JSONStore operation.
		//(startTransaction, add, remove).

		WL.JSONStore.rollbackTransaction()

		.always(function () {
			
		});
	});

}

