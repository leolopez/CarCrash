	var policyNavigation=0;
	
		function initPolicyPage(){
			$("#listCountries").hide();
			$("#listMarks").hide();
			$("#listSubMarks").hide();
			$("#listCities").hide();
			$("#policyCont").show();
			$("#vehicleCont").hide();
			policyNavigation=0;			   
			}
		function initVehicle(){			  	
		var policy=	 $("#txtPolicy");
		var policyDate=	 $("#txtPolicyDate");
		var aseg=$('#selectAseg :selected');
		if(policyDate.val().trim().length>0&&policy.val().trim().length>0&&aseg.val()!="0"){ 
			$("#listMarks").hide();
			$("#listSubMarks").hide();
			$("#policyCont").hide();
			$("#vehicleCont").show();
			policyNavigation=0;
			}else{				
				alert("Ingrese todos los datos");
			} 
			}
		
		function policiesAlert(){
			
			
				alert('La poliza 3GCEC28K4WG132181 esta por caducar.');
		}
		
		
		var selectedPolizaData;
		function j(){
		$("#perfilCont").hide();
		}
		function backPolicyCont(){
			$("#policyCont").show();
		$("#vehicleCont").hide();		
		}
		function backVehicleCont(){
			$("#policyCont").hide();
		$("#vehicleCont").show();		
		}
		function backPerfilCountries(){
			$("#listCountries").hide();
			$("#perfilCont").show();		
		}
		
		function backPerfilCities(){
			$("#listCities").hide();
			$("#listCountries").show();
		}						
		
		var cityData;
		function clearCities(city){
			cityData=city;	
			$("#lblCitySelected").text(""+$(cityData).text());			
		}
		
		function initMarks(){
		$("#vehicleCont").hide();
		$("#listMarks").show();
		policyNavigation=2;
		}
		var markData;
		function clearMarks(mark){
			$("#listMarks").hide();
			$("#listSubMarks").show();			
			markData=mark;
			policyNavigation=3;
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
		function initSelectedPolicyPage(v){
			var  listitem = $(v).parent( "li" );	
			
			selectedPolizaData=$(listitem).text();
			alert(selectedPolizaData);
			$("#perfilCont").hide();
			$("#policyCont").show();
			policyNavigation=0;
			
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
			$("#vehicleCont").show();
			$("#listSubMarks").hide();
			$("#searchSubMark").val(""+$(submarkData).html());
			$("#searchMark").val(""+$(markData).html());
			policyNavigation=0;
		}		
		$(document).on('pagebeforeshow','#AgregarPoliza',function(e,data){    
		    
		initPolicyPage();	 				  
		});	
		
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
			policyNavigation=0;
		}
		function backPerfilMarks(){
			$("#listMarks").hide();
			$("#vehicleCont").show();
			
		}
		
		function backPerfilSubMarks(){
			$("#listSubMarks").hide();
			$("#listMarks").show();
		}
		
		function backPolicy(){
			  
			switch(policyNavigation){
			case 0:
				backPolicyCont();						
			break;
			case 1:
				backVehicleCont();	
				policyNavigation=0;
			break;
			case 2:				
				 backPerfilMarks();
				 policyNavigation=0;
			break;
			case 3:			 	
				backPerfilSubMarks();
				policyNavigation=2;
			break;
			}
		}
		
		function takeCarPicture()
		{
			navigator.camera.getPicture(
			        function(data) {
			        	$('#carPhotoCube').hide();
			        	var div = "<div style=\"width: 65px; height: 65px; border: thin; border-style: dashed; display: inline-block; padding: 5px 5px 5px 5px;\">";
			        	var img = "<img src=\"" + data + "\" width=\"100%\" height=\"100%\" /></div>";
			            $('#carPhotos').append(div + img);
			        },
			        function(e) {
			            console.log("Error getting picture: " + e);
			        },
			        { quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType : navigator.camera.PictureSourceType.CAMERA});
		}