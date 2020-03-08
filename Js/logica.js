function iniciarMapa(){
    var loc = {lat: 32.6248622, lon: -115.448325};
    var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 4,
        center: loc
    });
}