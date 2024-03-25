let map;
let service;
let infowindow;

function initMap() {
    const center = { lat: 1.3521, lng: 103.819 }; // Example: Singapore
    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById('map'), { center: center, zoom: 15 });

    const request = {
        location: center,
        radius: '5000', // Search within a 5-kilometer radius
        type: ['fresh'] // Search for bank branches
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;

    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', () => {
        infowindow.setContent(place.name || "");
        infowindow.open(map, marker);
    });
}


function toggleMenu() {
    var menu = document.getElementById("menu-items");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        setTimeout(function () {
            menu.style.display = 'block';
        }, 0);
    } else {
        /*
        menu.classList.add("hidden");
        */
        setTimeout(function () {
            menu.style.display = 'none';
        }, 300);
    }
}


document.getElementById("menu-container").addEventListener("mouseleave", function () {
    var menu = document.getElementById("menu-items");
    menu.classList.add("hidden");
    setTimeout(function () {
        menu.style.display = 'none';
    }, 300);
});