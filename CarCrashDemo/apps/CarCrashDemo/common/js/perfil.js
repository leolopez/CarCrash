
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
		$("#perfilCont").hide();
		$("#listCountries").show();
		}
		
		function clearCountries(country){
		$("#listCities").show();
		$("#listCountries").hide();
		$("#searchCountry").val(""+$(country).html());
		}
		
		function clearCities(city){
			$("#perfilCont").show();
			$("#listCities").hide();
			$("#listCountries").hide();					
			$("#searchCity").val(""+$(city).html());
		}
		
		function initMarks(){
		$("#policyCont").hide();
		$("#listMarks").show();
		}
		
		function clearMarks(mark){
			$("#listMarks").hide();
			$("#listSubMarks").show();
			$("#searchMark").val(""+$(mark).html());
		}
		
		function dialogo(boton) {
           
            $("#dialog-confirm").dialog({
                height: 200,
                width: 300,
                modal: true,
                buttons: {
                    "Si": function () {
                        $(this).dialog("close");
                        boton.click();
                    },

                    "No": function () {
                        $(this).dialog("close");
                    }
                }
            });
          
        }           
		
		function clearSubMarks(submark){
			$("#policyCont").show();
			$("#listSubMarks").hide();
			$("#searchSubMark").val(""+$(submark).html());
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
		
