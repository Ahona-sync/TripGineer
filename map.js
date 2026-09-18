// ================= MAP INITIALIZATION =================

const map = L.map("travelMap").setView(
    [22.3569, 91.7832],
    11
);


// ================= OPENSTREETMAP =================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,
        attribution:
            '&copy; OpenStreetMap contributors'
    }
).addTo(map);


// ================= PLACE DATA =================

const places = [

    {
        name: "Patenga Beach",
        type: "tourist",
        lat: 22.2365,
        lng: 91.7907,
        description:
            "A popular sea beach near Chattogram city.",
        upazila: "karnaphuli"
    },

    {
        name: "Foy's Lake",
        type: "tourist",
        lat: 22.3657,
        lng: 91.7896,
        description:
            "A beautiful lake surrounded by hills.",
        upazila: "hathazari"
    },

    {
        name: "Sitakunda",
        type: "tourist",
        lat: 22.6170,
        lng: 91.6545,
        description:
            "A scenic area famous for hills and nature.",
        upazila: "sitakunda"
    },

    {
        name: "Parki Beach",
        type: "tourist",
        lat: 22.1635,
        lng: 91.8360,
        description:
            "A peaceful beach destination.",
        upazila: "anwara"
    },

    {
        name: "Evercare Hospital Chattogram",
        type: "hospital",
        lat: 22.4060,
        lng: 91.8460,
        description:
            "Major hospital in Chattogram."
    },

    {
        name: "Parkview Hospital",
        type: "hospital",
        lat: 22.3650,
        lng: 91.8140,
        description:
            "Hospital and healthcare facility."
    },

    {
        name: "Chattogram Railway Station",
        type: "transport",
        lat: 22.3335,
        lng: 91.8180,
        description:
            "Main railway station of Chattogram."
    },

    {
        name: "Chattogram City Centre",
        type: "transport",
        lat: 22.3569,
        lng: 91.7832,
        description:
            "Central area of Chattogram city."
    },

    {
        name: "Radisson Blu Chattogram",
        type: "hotel",
        lat: 22.3290,
        lng: 91.8110,
        description:
            "Hotel accommodation in Chattogram."
    },

    {
        name: "The Peninsula Chittagong",
        type: "hotel",
        lat: 22.3540,
        lng: 91.8160,
        description:
            "Hotel in the city centre."
    },

    {
        name: "Mezban Restaurant",
        type: "restaurant",
        lat: 22.3500,
        lng: 91.8000,
        description:
            "Local Chattogram cuisine."
    }

];


// ================= MARKER COLORS =================

const markerColors = {

    tourist: "#e31b23",

    hotel: "#1976d2",

    restaurant: "#f57c00",

    hospital: "#2e7d32",

    transport: "#7b1fa2"

};


// ================= MARKER STORAGE =================

let markers = [];


// ================= ADD MARKERS =================

function addMarkers() {

    places.forEach(function(place) {

        const marker = L.circleMarker(
            [place.lat, place.lng],
            {
                radius: 9,

                fillColor:
                    markerColors[place.type],

                color: "#ffffff",

                weight: 2,

                fillOpacity: 0.9
            }
        );


        marker.bindPopup(`

            <div class="popup-content">

                <h3>${place.name}</h3>

                <p>
                    ${place.description}
                </p>

                <small>
                    Category:
                    ${place.type}
                </small>

            </div>

        `);


        marker.addTo(map);

        marker.placeData = place;

        markers.push(marker);

    });

}


// Start markers

addMarkers();


// ================= SEARCH =================

function searchPlace() {

    const searchText =
        document
        .getElementById("searchPlace")
        .value
        .toLowerCase()
        .trim();


    if (searchText === "") {

        alert("Please enter a destination name.");

        return;
    }


    const result = places.find(function(place) {

        return place.name
            .toLowerCase()
            .includes(searchText);

    });


    if (result) {

        map.setView(
            [result.lat, result.lng],
            14
        );


        const marker = markers.find(function(m) {

            return m.placeData.name === result.name;

        });


        if (marker) {

            marker.openPopup();

        }

    } else {

        alert("Destination not found.");

    }

}


// ================= CATEGORY FILTER =================

function filterCategory() {

    const selected =
        document
        .getElementById("categorySelect")
        .value;


    markers.forEach(function(marker) {

        if (
            selected === "all" ||
            marker.placeData.type === selected
        ) {

            marker.addTo(map);

        } else {

            map.removeLayer(marker);

        }

    });

}


// ================= UPAZILA SELECTION =================

function selectUpazila() {

    const selected =
        document
        .getElementById("upazilaSelect")
        .value;


    if (selected === "") {

        map.setView(
            [22.3569, 91.7832],
            11
        );

        return;

    }


    const selectedPlaces =
        places.filter(function(place) {

            return place.upazila === selected;

        });


    if (selectedPlaces.length > 0) {

        const firstPlace =
            selectedPlaces[0];

        map.setView(
            [firstPlace.lat, firstPlace.lng],
            12
        );

    } else {

        alert(
            "Tourist information for this Upazila will be added soon."
        );

    }

}


// ================= ROUTE DATA =================

const routeData = {

    "ctg-patenga": {
        from: "Chattogram City",
        to: "Patenga Beach",
        distance: "18 km",
        time: "45 min",
        cost: "৳80 - ৳250"
    },

    "ctg-sitakunda": {
        from: "Chattogram City",
        to: "Sitakunda",
        distance: "38 km",
        time: "1 hr 15 min",
        cost: "৳100 - ৳350"
    },

    "ctg-foyslake": {
        from: "Chattogram City",
        to: "Foy's Lake",
        distance: "7 km",
        time: "20 min",
        cost: "৳40 - ৳150"
    },

    "ctg-parkirchar": {
        from: "Chattogram City",
        to: "Parki Beach",
        distance: "30 km",
        time: "1 hr",
        cost: "৳100 - ৳300"
    }

};


// ================= ROUTE LINES =================

let routeLine = null;


// ================= ROUTE COORDINATES =================

const coordinates = {

    ctg: [22.3569, 91.7832],

    patenga: [22.2365, 91.7907],

    sitakunda: [22.6170, 91.6545],

    foysLake: [22.3657, 91.7896],

    parkirchar: [22.1635, 91.8360]

};


// ================= SHOW ROUTE =================

function showRoute() {

    const from =
        document
        .getElementById("fromPlace")
        .value;


    const to =
        document
        .getElementById("toPlace")
        .value;


    if (
        from === "" ||
        to === ""
    ) {

        alert(
            "Please select both starting point and destination."
        );

        return;

    }


    if (from === to) {

        alert(
            "Starting point and destination cannot be the same."
        );

        return;

    }


    let routeKey =
        from + "-" + to;


    let reverseKey =
        to + "-" + from;


    let route =
        routeData[routeKey] ||
        routeData[reverseKey];


    if (!route) {

        alert(
            "Route information for this journey will be added soon."
        );

        return;

    }


    // Remove old route

    if (routeLine) {

        map.removeLayer(routeLine);

    }


    const fromCoordinate =
        getCoordinate(from);

    const toCoordinate =
        getCoordinate(to);


    routeLine = L.polyline(

        [
            fromCoordinate,
            toCoordinate
        ],

        {
            color: "#e31b23",

            weight: 5,

            dashArray: "10, 10",

            opacity: 0.9
        }

    ).addTo(map);


    // Fit map

    map.fitBounds(
        routeLine.getBounds(),
        {
            padding: [40, 40]
        }
    );


    // Show result

    document
        .getElementById("routeFrom")
        .textContent = route.from;


    document
        .getElementById("routeTo")
        .textContent = route.to;


    document
        .getElementById("routeDistance")
        .textContent = route.distance;


    document
        .getElementById("routeTime")
        .textContent = route.time;


    document
        .getElementById("routeCost")
        .textContent = route.cost;


    document
        .getElementById("routeResult")
        .classList.add("show");


    // Scroll to result

    document
        .getElementById("routeResult")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ================= GET COORDINATE =================

function getCoordinate(place) {

    if (place === "ctg") {

        return coordinates.ctg;

    }

    if (place === "patenga") {

        return coordinates.patenga;

    }

    if (place === "sitakunda") {

        return coordinates.sitakunda;

    }

    if (place === "foyslake") {

        return coordinates.foysLake;

    }

    if (place === "parkirchar") {

        return coordinates.parkirchar;

    }

}


// ================= RESET MAP =================

function resetMap() {

    document
        .getElementById("searchPlace")
        .value = "";


    document
        .getElementById("upazilaSelect")
        .value = "";


    document
        .getElementById("categorySelect")
        .value = "all";


    document
        .getElementById("fromPlace")
        .value = "";


    document
        .getElementById("toPlace")
        .value = "";


    markers.forEach(function(marker) {

        marker.addTo(map);

    });


    if (routeLine) {

        map.removeLayer(routeLine);

        routeLine = null;

    }


    document
        .getElementById("routeResult")
        .classList.remove("show");


    map.setView(
        [22.3569, 91.7832],
        11
    );

}