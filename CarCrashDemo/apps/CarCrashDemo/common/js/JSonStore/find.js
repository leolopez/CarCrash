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
function initPerfilDataInfo(namep, firstnamep, lastnamep, cellPhonep,cityp,enterprisep){
	
	 var collections = {
	            perfil : {
	                searchFields: {name: 'string', firstname: 'string', lastname: 'string', cellPhone: 'string',
	                	city: 'string', enterprise: 'string'}
	            } 
	    };
	    
	WL.JSONStore.init(collections).then(function () {
		var collectionName = 'perfil';
		var options = {
				  // Returns a maximum of 1 documents, default no limit.
				  limit: 1
				};
		WL.JSONStore.get(collectionName).findAll(options).then(function (arrayResults) {
		
		var v=	JSON.stringify(arrayResults).split("{");
		var t=v[2].split(":");

		  WL.Logger.debug("Retrieve success" +  WL.JSONStore.get('perfil').find({name: 'leo'}));
		setData(t[0].replace('"','').replace('"',''),t[1].split(",")[0].replace('"','').replace('"',''),namep,firstnamep,lastnamep,cellPhonep,cityp,enterprisep);
		setData(t[1].split(",")[1].replace('"','').replace('"',''),t[2].split(",")[0].replace('"','').replace('"',''),namep,firstnamep,lastnamep,cellPhonep,cityp,enterprisep);
		setData(t[2].split(",")[1].replace('"','').replace('"',''),t[3].split(",")[0].replace('"','').replace('"',''),namep,firstnamep,lastnamep,cellPhonep,cityp,enterprisep);
		setData(t[3].split(",")[1].replace('"','').replace('"',''),t[4].split(",")[0].replace('"','').replace('"',''),namep,firstnamep,lastnamep,cellPhonep,cityp,enterprisep);
		setData(t[4].split(",")[1].replace('"','').replace('"',''),t[5].split(",")[0].replace('"','').replace('"',''),namep,firstnamep,lastnamep,cellPhonep,cityp,enterprisep);
		setData(t[5].split(",")[1].replace('"','').replace('"',''),t[6].split(",")[0].replace('"','').replace('"','').replace(']','').replace('}}',''),namep,firstnamep,lastnamep,cellPhonep,cityp,enterprisep);			  
		});
	});	
	}

function setData(data,value,namep,firstnamep,lastnamep,cellPhonep,cityp,enterprisep){
	switch(data){
	case "name":
	namep.val(value);
	break;
	case "firstname":
		firstnamep.val(value);
		break;
	case "lastname":
		lastnamep.val(value);
		break;
	case "city":
		cityp.val(value);
		break;
	case "cellPhone":
		cellPhonep.val(value);
		break;
	case "enterprise":
		enterprisep.val(value);
		break;
	};	
}

function initPolicyDataInfo(namep, firstnamep, lastnamep, cellPhonep,cityp,enterprisep){
	
	 var collections = {
	            poliza : {
	            	 searchFields: {policy: 'string', serie: 'string', plates: 'string', vehicleType: 'string',
 	                	mark: 'string', submark: 'string',model: 'string',color: 'string',holder: 'string',
 	                	conductor: 'string'}
	            } 
	    };
	    
	WL.JSONStore.init(collections).then(function () {
		var collectionName = 'poliza';
		var options = {
				  // Returns a maximum of 1 documents, default no limit.
				  limit: 1
				};
		WL.JSONStore.get(collectionName).findAll(options).then(function (arrayResults) {
			
				
		}); 
		
	});
	
	}	

	
function  initPolicy(namep, firstnamep, lastnamep, cellPhonep,cityp,enterprisep){
	
	 var collections = {
	            poliza : {
	            	 searchFields: {policy: 'string', serie: 'string', plates: 'string', vehicleType: 'string',
	                	mark: 'string', submark: 'string',model: 'string',color: 'string',holder: 'string',
	                	conductor: 'string'}
	            } 
	    };
	    
	WL.JSONStore.init(collections).then(function () {
		var collectionName = 'poliza';
		var options = {
				  // Returns a maximum of 1 documents, default no limit.
				  limit: 1
				};
	return	WL.JSONStore.get(collectionName).findAll(options);
		
		
	});
	
	}	