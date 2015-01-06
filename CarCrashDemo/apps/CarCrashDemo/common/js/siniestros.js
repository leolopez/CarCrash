function sendIncidenteInfo()
{
	if(currentLat != 0 && currentLng != 0)
	{
		if($('#selectAuto').val() != 0)
		{
			alert('Posicion:\nLatitud - ' +
					currentLat +
					'\nLongitud - ' + currentLng +
					'\nAuto:\n' +
					$('#selectAuto option:selected').text() +
					'\nPlacas - HCM-2101\nPoliza - 11111111');
		}
		else
		{
			alert('Debe seleccionar el automovil siniestrado.')
		}
	}
	else
	{
		alert('Su ubicación no puede ser leída.');
	}
}