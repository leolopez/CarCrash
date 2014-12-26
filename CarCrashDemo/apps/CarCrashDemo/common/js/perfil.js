
		$(
		
		function initPerfil(){
		$("#listCountries").hide();
		$("#listMarks").hide();
		$("#listSubMarks").hide();
		$("#listCities").hide();
		$("#policyCont").hide();
		}
		);

		function j(){
		$("#perfilCont").hide();
		}
		
		function jh(){
		$("#perfilCont").show();
		
		}
		
		function initCountries(){
			$('input[data-type="search"]').trigger("keyup");
		$("#perfilCont").hide();
		$("#listCountries").show();
		}
		
		function clearCountries(country){
		$("#listCities").show();
		$("#listCountries").hide();
		$("#searchCountry").val(""+$(country).html());
		}
		
		var cityData;
		function clearCities(city){
			cityData=city;	
			$("#lblCitySelected").text(""+$(cityData).text());			
		}
		
		function initMarks(){
		$("#policyCont").hide();
		$("#listMarks").show();
		}
		var markData;
		function clearMarks(mark){
			$("#listMarks").hide();
			$("#listSubMarks").show();
			$("#searchMark").val(""+$(mark).html());
			markData=mark;
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
		}
		
		function citySelected(){						
				$("#perfilCont").show();
				$("#listCities").hide();
				$("#listCountries").hide();					
				$("#searchCity").val(""+$(cityData).text());												
		}
	
		function savePerfil(){						
					
									
	}
		function savePolicy(){						
			
			 var newAmount = "2";

		    if(newAmount != '') {
		        $('#listPolicy').append('<li class="ui-li-has-alt"><a href="" data-transition="slide" class="ui-btn" onclick="initPolicy();">Poliza1</a>'+
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
	}
		
	
		
		
		
		
		