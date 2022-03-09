window.onload = () => {
    let places = staticLoadPlaces();
    setTimeout(() => {
        renderPlaces(places);
    }, 5000);
    document
            .querySelector(".say-hi-button")
            .addEventListener("click", function () {
                getLocation()
            });
};

function staticLoadPlaces() {
   return [
       {
           name: 'Foot',
           location: {
               lat: 51.45000173691049,
               lng: 5.455874148690271,
           }
       },
   ];
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    alert(`lat: ${position.coords.latitude}, long: ${position.coords.longitude}`)
  }

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       let model = document.createElement('a-entity');
       model.setAttribute('gps-projected-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', 'foot.glb');
       model.setAttribute('scale', '1 1 1');

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
           alert("Loadedd")
       });

       scene.appendChild(model);
   });
}