
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
		 var listitem;
		function deletePolicy(v){
			  listitem = $(v).parent( "li" );					
		}
		
		function policyDeleted(){			
			 var item2 = $("#listPolicy").find(listitem);
			    item2.remove();
			    $("#listPolicy").listview("refresh");			
		}
		

		$(document).on('pagebeforeshow','#perfil',function(e,data){    
		    $('#cars-data').empty();
		    $.ajax({
		        type: "POST",
		        url: "/xmls/perfil/",
		        dataType: "xml",
		        data: {
		           
		        },
		        success: function(xml) {
		            ajax.parseXML(xml);
		        },
		        error: function (request,error) {
		           
		        }
		    });
		});

		$(document).on('pagebeforeshow', '#cars',function () {
		    $("#cars div[data-role='header'] h1").html(carObject.carName);
		    $('#car-data').empty();
		    $('#car-data').append('<li>Car Type:<span> ' + carObject.carName + '</span></li>');
		    $('#car-data').append('<li>Car Country:<span> ' + carObject.carCountry + '</span></li>');        
		    $('#car-data').append('<li>Car Description:<span> ' + carObject.description + '</span></li>');    
		    $('#car-data').listview('refresh');   
		    $('#car-img').attr('src' , carObject.img );    
		    
		});

		var ajax = {  
		    parseXML:function(result){
		        $(result).find("car").each(function(){
		            carObject.carName  = $(this).find('name').text();
		            carObject.carCountry  = $(this).find('country').text();
		            carObject.img  = $(this).find('pic').text();
		            carObject.description  = $(this).find('description').text();
		            
		            $('#cars-data').append('<li><a href="#cars"><img src="' + carObject.img + '" title="sample" height="100%" width="100%"/><h3>Car type:<span> '+carObject.carName+'</span></h3><p>' + carObject.description + '</p></a></li>');
		        });    
		        $('#cars-data').listview('refresh');
		        $('#index').append('<div data-role="footer" data-position="fixed"><h1>Dynamicaly added footer</h1></div> ');
		        $('#index [data-role="content"]').append('<fieldset data-role="controlgroup"><legend>Choose:</legend><input type="radio" name="radio" id="radio1" value="1" checked="checked" /><label for="radio1">option 1</label></fieldset>');
		        $('#index').trigger('pagecreate');
		    }
		}

		var carObject = {
		    carName : '',
		    carCountry : '',
		    img : '',
		    description : ''    
		}

