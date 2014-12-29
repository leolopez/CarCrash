
		$(
		
		function initPerfil(){
		$("#listCountries").hide();
		$("#listMarks").hide();
		$("#listSubMarks").hide();
		$("#listCities").hide();
		$("#policyCont").hide();
		
		}
		);
		var navigation=0;
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
		function initPolicy(){
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
		
	
		function savePerfil(){						
					
			
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
			$("#txtPolicy");
		var serie=	$("#txtSeries");
			$("#txtPlates");
			$("#txtVehicleType");
			$("#searchMark");
			$("#searchSubMark");
			$("#txtModel");
			$("#txtColor");
			$("#txtHolder");
			$("#txtConductor");
			
			 var newAmount = "2";

		    if(newAmount != '') {
		        $('#listPolicy').append('<li class="ui-li-has-alt"><a href="" data-transition="slide" class="ui-btn" onclick="initPolicy();">'+serie.val()+'</a>'+
		        		 '<a href="#popupDialogEliminar" class="ui-icon-delete-red ui-btn ui-btn-icon-notext ui-icon-delete ui-btn-d" '+
		        		 ' aria-haspopup="true" aria-owns="popupDialogEliminar"  aria-expanded="false" onclick="deletePolicy(this);" '+
		        		 ' data-rel="popup" data-position-to="window" data-transition="pop" ></a></li>').listview('refresh');
		        
		    } else {
		        alert('Nothing to add');   
		    }
		    
		     
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
							
		