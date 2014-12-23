function setMap(pLat, pLng)
{
	alert('lat:' + pLat + ' - ' + 'lng:' + pLng);
	var myLatlng = new google.maps.LatLng(pLat, pLng);
    var mapOptions = {
      zoom: 18,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });    			
}

/*
 * This file contains script to get lattitude and longitude
 * 
 */
//A button click will call this function
function getLocation() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });
}

// onSuccess Geolocation
//
function onSuccess(position) {
    //Lat long will be fetched and stored in session variables
    //These variables will be used while storing data in local database 
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    setMap(lat,lng);
}
// onError Callback receives a PositionError object
//
function onError(error) {
    //getLocation();
	alert('error :(');
}