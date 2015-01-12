
		$(
		
		function initPerfil(){
		$("#listCountries").hide();
		$("#listMarks").hide();
		$("#listSubMarks").hide();
		$("#listCities").hide();
		$("#policyCont").hide();
				
		   
		}
		);
		
		function policiesAlert(){
			
			
				alert('La poliza 3GCEC28K4WG132181 esta por caducar.');
		}
		
		var navigation=0;
		var selectedPolizaData;
		function j(){
		$("#perfilCont").hide();
		}
		
		function backPerfilCont(){
			$("#policyCont").hide();
		$("#perfilCont").show();		
		}
		function backPerfilCountries(){
			$("#listCountries").hide();
			$("#perfilCont").show();		
		}
		
		function backPerfilCities(){
			$("#listCities").hide();
			$("#listCountries").show();
		}
		function backPerfilCountries(){
			$("#listCountries").hide();
			$("#perfilCont").show();		
		}
		
		function initCountries(){	
		$("#perfilCont").hide();
		$("#listCountries").show();
		navigation=4;
		}
		
		function clearCountries(country){
		$("#listCities").show();
		$("#listCountries").hide();		
		navigation=5;
		}
		
		var cityData;
		function clearCities(city){
			cityData=city;	
			$("#lblCitySelected").text(""+$(cityData).text());			
		}
		
		function initMarks(){
		$("#policyCont").hide();
		$("#listMarks").show();
		navigation=2;
		}
		var markData;
		function clearMarks(mark){
			$("#listMarks").hide();
			$("#listSubMarks").show();			
			markData=mark;
			navigation=3;
		}
		
		         
		var submarkData;
		function clearSubMarks(submark){
			submarkData=submark;
			$("#lblMarkSelected").text(""+$(markData).text());
			$("#lblSubMarkSelected").text(""+$(submarkData).text());
		}
		
		function addPolicy(){
			var value ="sss";
			var listItem = "<li>" + value + "</li>";
			$("#listPolicy").append(listItem);
			
		}
		function initPolicy(v){
			var  listitem = $(v).parent( "li" );	
			
			selectedPolizaData=$(listitem).text();
			loadSelectedVehicle("true");
			$("#perfilCont").hide();
			$("#policyCont").show();
			navigation=1;
			
		}
		 var listitem;
		function deletePolicy(v){
			  listitem = $(v).parent( "li" );
			  $("#lblPolicySelected").text(""+$(listitem).text());	
		}
		
		function policyDeleted(){			
			 var item2 = $("#listPolicy").find(listitem);
			    item2.remove();
			   
			    $("#listPolicy").listview("refresh");			
		}		
		
		
		
		function markSelected(){			
			$("#policyCont").show();
			$("#listSubMarks").hide();
			$("#searchSubMark").val(""+$(submarkData).html());
			$("#searchMark").val(""+$(markData).html());
			navigation=1;
		}		
		$(document).on('pagebeforeshow','#perfil',function(e,data){    
		    
		var n=	$("#txtName");
		var n1=	$("#txtFirstName");
		var n2=	$("#txtLastName");
		var n3=	$("#txtCellPhone");
		var n4=	$("#searchCity");
		var n5=	$("#txtEmpresa");	
		initPerfilDataInfo(n,n1,n2,n3,n4,n5);					  
		});
	
		var ajax = {  
			    parseXML:function(result){			    				  			    				    				    	
			    	 			    	
			        $(result).find("perfil").each(function(){
			        	$("#txtName").val($(this).find('nombre').text());
			        	$("#txtFirstName").val($(this).find('paterno').text());
			        	$("#txtLastName").val($(this).find('materno').text());
			        	$("#txtCellPhone").val($(this).find('movil').text());
			        	$("#searchCity").val($(this).find('ciudadresidencia').text());
			        	$("#txtEmpresa").val($(this).find('empresaflotilla').text());			        	
			        	
			        	var myXML = ""
			        		var request = new XMLHttpRequest();
			        		request.open("GET", "xmls/perfil.xml", true);
			        		request.onreadystatechange = function(){
			        		    if (request.readyState == 4) {
			        		        if (request.status == 200 || request.status == 0) {
			        		            myXML = request.responseXML;
			        		        }
			        		    }
			        		}
			        	
			        	request.send();
			        });  
			       
			    }
			};

		var ajaxVehicle = {  
			    parseXML:function(result){
			    	$("#txtPolicy").val('');
		        	$("#txtSeries").val('');
		        	$("#txtPlates").val('');
		        	$("#txtVehicleType").val('');
		        	$("#searchMark").val('');
		        	$("#searchSubMark").val('');			        	
		        	$("#txtModel").val('');
		    		$("#txtColor").val('');
		    		$("#txtHolder").val('');
		    		$("#txtConductor").val('');			    		
			    	
			        $(result).find("vehiculo").each(function(){
			        	var selected= $(this).find('serie').text()== selectedPolizaData.trim();
			        	if(selected){
			        	$("#txtPolicy").val($(this).find('poliza').text());
			        	$("#txtSeries").val($(this).find('serie').text());
			        	$("#txtPlates").val($(this).find('placas').text());
			        	$("#txtVehicleType").val($(this).find('tipoVehiculo').text());
			        	$("#searchMark").val($(this).find('marca').text());
			        	$("#searchSubMark").val($(this).find('submarca').text());			        	
			        	$("#txtModel").val($(this).find('modelo').text());
			    		$("#txtColor").val($(this).find('color').text());
			    		$("#txtHolder").val($(this).find('titular').text());
			    		$("#txtConductor").val($(this).find('conductor').text());	  
			        }

			        });    
			      
			    }
			};
		
		var ajaxFillVehicleslist = {  
			    parseXML:function(result){			    		    		
			    	
			        $(result).find("vehiculo").each(function(){			        	
			        	
			        	$("#txtSeries").val($(this).find('serie').text());			        	
			        	addPolicyToList($(this).find('serie'));
			        });    
			      
			    }
			};
		
		function loadSelectedVehicle(condition){
			 $.ajax({
			        type: "get",
			        url: "xmls/vehiculo.xml",
			        dataType: "xml",
			        data: {
			           
			        },
			        success: function(data) {
			        
			        	ajaxVehicle.parseXML(data);
			        
			        },
			        error: function (request,error) {
			        	alert(''+error);
			        }
			    });
			
		}
		
		function savePerfil(){						
			var name=	$("#txtName");
			var firstName=	$("#txtFirstName");
			var lastName=	$("#txtLastName");
			var cellPhone=$("#txtCellPhone");
			var serachCity=$("#searchCity");
			var empresa=$("#txtEmpresa");						
			setDataToTransaction(name,firstName,lastName,cellPhone,serachCity,empresa);
		}
		function saveAnyPerfil(){						
			switch(navigation){
			case 0:						
				 savePerfil();
			break;
			case 1:						
				savePolicy();
				break;				
			}			
		}
		function savePolicy(){						
			var policy=	$("#txtPolicy");
		var serie=	$("#txtSeries");
		var plates=	$("#txtPlates");
		var vehicleType=$("#txtVehicleType");
		var mark=$("#searchMark");
		var subMark=$("#searchSubMark");
		var model=$("#txtModel");
		var color=$("#txtColor");
		var holder=$("#txtHolder");
		var conductor=$("#txtConductor");
		
			 var newAmount = "2";

		    if(newAmount != '') {
		    	setDataToPolicyTransaction(policy,serie,plates,vehicleType,mark,subMark,model,color,holder,conductor);
		    	addPolicyToList(serie);		     
		    } else {
		       
		    }
		    
		   
		}
		function addPolicyToList(serie){
			
			$('#listPolicy').append('<li class="ui-li-has-alt"><a href="" data-transition="slide" class="ui-btn" onclick="initPolicy();">'+serie.val().trim()+'</a>'+
	        		 '<a href="#popupDialogEliminar" class="ui-icon-delete-red ui-btn ui-btn-icon-notext ui-icon-delete ui-btn-d" '+
	        		 ' aria-haspopup="true" aria-owns="popupDialogEliminar"  aria-expanded="false" onclick="deletePolicy(this);" '+
	        		 ' data-rel="popup" data-position-to="window" data-transition="pop" ></a></li>').listview('refresh');
	        
		}
		
		function citySelected(){						
			$("#perfilCont").show();
			$("#listCities").hide();
			$("#listCountries").hide();					
			$("#searchCity").val(""+$(cityData).text());
			navigation=0;
		}
		function backPerfilMarks(){
			$("#listMarks").hide();
			$("#policyCont").show();		
		}
		
		function backPerfilSubMarks(){
			$("#listSubMarks").hide();
			$("#listMarks").show();
		}
		
		function backPerfil(){
			
			switch(navigation){
			case 0:						
				initPerfil();	
			break;
			case 1:
				backPerfilCont();				
				navigation=0;
			break;
			case 2:				
				 backPerfilMarks();
				 navigation=1;
			break;
			case 3:				
				backPerfilSubMarks();
				navigation=2;
			break;
			case 4:				
				backPerfilCountries();
				navigation=0;
			break;
			case 5:					
				 backPerfilCities();
				 navigation=4;
			break;	
			}
		}
		 
		function test(){    
			
		}
		
		function fillVehiclesListView(){
								
		}
		  function getTest() {
              var invocationData = {
                      adapter : 'testXML',
                      procedure : 'CreateXML',
                      invocationContext: {}
                  };

              WL.Client.invokeProcedure(invocationData,{
                  onSuccess : successHandler,
                  onFailure : failureHandler,
              });
          }					
          
          function successHandler(result)
          {
          WL.Logger.debug("Retrieve success" +  JSON.stringify(result));
          alert('res '+result.invocationResult.result);  
          }
          
          function failureHandler(result)
          {
          	alert(result.errorMsg);
          }	
		
          function obsolet(){
				
  		}