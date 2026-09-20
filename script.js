// TripGineer
// JavaScript functionality will be added later.

// For now, the homepage is static.
console.log("Welcome to TripGineer - Explore Chittagong!");
// ================= CATEGORY INFORMATION =================

function selectCategory(card) {

    const cards = document.querySelectorAll(".category-card");

    cards.forEach(function(item) {
        item.classList.remove("active");
    });

    card.classList.add("active");
}
// =========================================
// ABOUT CHATTOGRAM
// =========================================

function showAbout() {

    const aboutFull = document.getElementById("aboutFull");

    // Show full description
    aboutFull.style.display = "block";

    // Smoothly move to the full description
    aboutFull.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function hideAbout() {

    const aboutFull = document.getElementById("aboutFull");

    // Hide full description
    aboutFull.style.display = "none";
}
// =====================================================
// EXPLORE BY CATEGORY
// =====================================================

let currentCategory = 0;

const exploreCards =
    document.querySelectorAll(".explore-card");

const totalCategories =
    exploreCards.length;


// Create indicator dots

function createCategoryIndicators() {

    const indicators =
        document.getElementById("categoryIndicators");

    if (!indicators) {
        return;
    }

    for (let i = 0; i < totalCategories; i++) {

        const dot =
            document.createElement("span");

        dot.classList.add("category-indicator");

        dot.onclick = function() {

            goToCategory(i);

        };

        indicators.appendChild(dot);
    }
}


// Update cards

function updateCategory() {

    exploreCards.forEach(function(card, index) {

        card.classList.remove(
            "active",
            "left",
            "right",
            "back-left",
            "back-right"
        );


        // Front card

        if (index === currentCategory) {

            card.classList.add("active");

        }


        // Left card

        else if (
            index ===
            (currentCategory - 1 + totalCategories)
            % totalCategories
        ) {

            card.classList.add("left");

        }


        // Right card

        else if (
            index ===
            (currentCategory + 1)
            % totalCategories
        ) {

            card.classList.add("right");

        }


        // Cards behind

        else if (index < currentCategory) {

            card.classList.add("back-left");

        }

        else {

            card.classList.add("back-right");

        }

    });


    // Update dots

    const indicators =
        document.querySelectorAll(
            ".category-indicator"
        );


    indicators.forEach(function(dot, index) {

        dot.classList.remove("active");

        if (index === currentCategory) {

            dot.classList.add("active");

        }

    });

}


// Click any category card

function goToCategory(index) {

    currentCategory = index;

    updateCategory();

}


// Next button

function nextCategory() {

    currentCategory =
        (currentCategory + 1)
        % totalCategories;

    updateCategory();

}


// Previous button

function previousCategory() {

    currentCategory =
        (currentCategory - 1 + totalCategories)
        % totalCategories;

    updateCategory();

}


// Start carousel

createCategoryIndicators();

updateCategory();
// =====================================================
// HOLIDAY CALENDAR
// =====================================================


// Current calendar month
let calendarDate = new Date(2026, 8, 1);
// 8 = September


// =====================================================
// BANGLADESH HOLIDAYS 2026
// =====================================================

const holidays2026 = {

    "2026-02-04": {
        name: "Shab-e-Barat",
        type: "Religious Holiday"
    },

    "2026-02-21": {
        name: "Shaheed Day & International Mother Language Day",
        type: "National Holiday"
    },

    "2026-03-17": {
        name: "Shab-e-Qadr",
        type: "Religious Holiday"
    },

    "2026-03-19": {
        name: "Eid-ul-Fitr Holiday",
        type: "Public Holiday"
    },

    "2026-03-20": {
        name: "Jumatul Bida / Eid-ul-Fitr Holiday",
        type: "Public Holiday"
    },

    "2026-03-21": {
        name: "Eid-ul-Fitr",
        type: "Public Holiday"
    },

    "2026-03-22": {
        name: "Eid-ul-Fitr Holiday",
        type: "Public Holiday"
    },

    "2026-03-23": {
        name: "Eid-ul-Fitr Holiday",
        type: "Public Holiday"
    },

    "2026-03-26": {
        name: "Independence & National Day",
        type: "National Holiday"
    },

    "2026-04-14": {
        name: "Bangla New Year / Pohela Boishakh",
        type: "National Holiday"
    },

    "2026-05-01": {
        name: "May Day & Buddha Purnima",
        type: "National Holiday"
    },

    "2026-05-25": {
        name: "Eid-ul-Azha Holiday",
        type: "Public Holiday"
    },

    "2026-05-26": {
        name: "Eid-ul-Azha",
        type: "Public Holiday"
    },

    "2026-05-27": {
        name: "Eid-ul-Azha",
        type: "Public Holiday"
    },

    "2026-05-28": {
        name: "Eid-ul-Azha",
        type: "Public Holiday"
    },

    "2026-05-29": {
        name: "Eid-ul-Azha Holiday",
        type: "Public Holiday"
    },

    "2026-05-30": {
        name: "Eid-ul-Azha Holiday",
        type: "Public Holiday"
    },

    "2026-05-31": {
        name: "Eid-ul-Azha Holiday",
        type: "Public Holiday"
    },

    "2026-06-26": {
        name: "Ashura",
        type: "Religious Holiday"
    },

    "2026-08-05": {
        name: "July Mass Uprising Day",
        type: "National Holiday"
    },

    "2026-08-26": {
        name: "Eid-e-Milad-un-Nabi (S)",
        type: "Religious Holiday"
    },

    "2026-09-04": {
        name: "Janmashtami",
        type: "Religious Holiday"
    },

    "2026-10-20": {
        name: "Durga Puja - Mahanabami",
        type: "Religious Holiday"
    },

    "2026-10-21": {
        name: "Durga Puja - Bijoya Dashami",
        type: "National Holiday"
    },

    "2026-12-16": {
        name: "Victory Day",
        type: "National Holiday"
    },

    "2026-12-25": {
        name: "Christmas Day",
        type: "National Holiday"
    }

};


// =====================================================
// MONTH NAMES
// =====================================================

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


// =====================================================
// CREATE CALENDAR
// =====================================================

function createHolidayCalendar() {

    const calendarDays =
        document.getElementById("calendarDays");

    const calendarMonth =
        document.getElementById("calendarMonth");


    if (!calendarDays || !calendarMonth) {
        return;
    }


    calendarDays.innerHTML = "";


    const year =
        calendarDate.getFullYear();

    const month =
        calendarDate.getMonth();


    // Month title

    calendarMonth.textContent =
        monthNames[month] + " " + year;


    // First day of month

    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    // Number of days

    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    // Previous month days

    const previousMonthDays =
        new Date(
            year,
            month,
            0
        ).getDate();


    // =================================================
    // PREVIOUS MONTH
    // =================================================

    for (
        let i = firstDay - 1;
        i >= 0;
        i--
    ) {

        const dayNumber =
            previousMonthDays - i;


        const day =
            document.createElement("div");

        day.classList.add(
            "calendar-day",
            "other-month"
        );


        day.innerHTML = `
            <span class="day-number">
                ${dayNumber}
            </span>
        `;


        calendarDays.appendChild(day);

    }


    // =================================================
    // CURRENT MONTH
    // =================================================

    const today =
        new Date();


    for (
        let dayNumber = 1;
        dayNumber <= daysInMonth;
        dayNumber++
    ) {

        const day =
            document.createElement("div");

        day.classList.add(
            "calendar-day"
        );


        // Date number

        const number =
            document.createElement("span");

        number.classList.add(
            "day-number"
        );

        number.textContent =
            dayNumber;


        day.appendChild(number);


        // Check Today

        if (
            dayNumber === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {

            day.classList.add("today");

        }


        // Holiday date

        const monthNumber =
            String(month + 1)
            .padStart(2, "0");

        const dayNumberText =
            String(dayNumber)
            .padStart(2, "0");


        const dateKey =
            `${year}-${monthNumber}-${dayNumberText}`;


        const holiday =
            holidays2026[dateKey];


        // =================================================
        // HOLIDAY EVENT
        // =================================================

        if (holiday) {

            const event =
                document.createElement("div");

            event.classList.add(
                "holiday-event"
            );


            event.textContent =
                holiday.name;


            event.onclick =
                function() {

                    showHolidayDetails(
                        dateKey,
                        holiday
                    );

                };


            day.appendChild(event);

        }


        calendarDays.appendChild(day);

    }


    // =================================================
    // NEXT MONTH DAYS
    // =================================================

    const totalCells =
        firstDay + daysInMonth;


    const remainingCells =
        7 - (totalCells % 7);


    if (remainingCells < 7) {

        for (
            let i = 1;
            i <= remainingCells;
            i++
        ) {

            const day =
                document.createElement("div");

            day.classList.add(
                "calendar-day",
                "other-month"
            );


            day.innerHTML = `
                <span class="day-number">
                    ${i}
                </span>
            `;


            calendarDays.appendChild(day);

        }

    }

}


// =====================================================
// PREVIOUS MONTH
// =====================================================

function previousMonth() {

    calendarDate.setMonth(
        calendarDate.getMonth() - 1
    );

    createHolidayCalendar();

}


// =====================================================
// NEXT MONTH
// =====================================================

function nextMonth() {

    calendarDate.setMonth(
        calendarDate.getMonth() + 1
    );

    createHolidayCalendar();

}


// =====================================================
// GO TO TODAY
// =====================================================

function goToToday() {

    const today =
        new Date();

    calendarDate =
        new Date(
            today.getFullYear(),
            today.getMonth(),
            1
        );

    createHolidayCalendar();

}


// =====================================================
// SHOW HOLIDAY DETAILS
// =====================================================

function showHolidayDetails(
    dateKey,
    holiday
) {

    const selectedHoliday =
        document.getElementById(
            "selectedHoliday"
        );


    if (!selectedHoliday) {
        return;
    }


    const date =
        new Date(
            dateKey + "T00:00:00"
        );


    const formattedDate =
        date.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );


    selectedHoliday.innerHTML = `

        <h3>
            ${holiday.name}
        </h3>

        <span>
            📅 ${formattedDate}
        </span>

        <span>
            🏷️ ${holiday.type}
        </span>

    `;

}


// =====================================================
// INITIALIZE
// =====================================================

createHolidayCalendar();
// =====================================================
// HOME PAGE DIGITAL MAP
// =====================================================

// =====================================================
// HOME PAGE DIGITAL MAP
// =====================================================

const homeMapElement =
    document.getElementById("homeTravelMap");


if (homeMapElement) {

    const homeMap = L.map(
        "homeTravelMap"
    ).setView(
        [22.3569, 91.7832],
        11
    );


    // OpenStreetMap

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,

            attribution:
                '&copy; OpenStreetMap contributors'
        }
    ).addTo(homeMap);


    // Places

    const homeMapPlaces = [

        {
            name: "Patenga Beach",
            lat: 22.2365,
            lng: 91.7907,
            type: "Tourist Place"
        },

        {
            name: "Foy's Lake",
            lat: 22.3657,
            lng: 91.7896,
            type: "Tourist Place"
        },

        {
            name: "Sitakunda",
            lat: 22.6170,
            lng: 91.6545,
            type: "Tourist Place"
        },

        {
            name: "Parki Beach",
            lat: 22.1635,
            lng: 91.8360,
            type: "Tourist Place"
        },

        {
            name: "Evercare Hospital Chattogram",
            lat: 22.4060,
            lng: 91.8460,
            type: "Hospital"
        },

        {
            name: "Chattogram Railway Station",
            lat: 22.3335,
            lng: 91.8180,
            type: "Transport"
        },

        {
            name: "Radisson Blu Chattogram",
            lat: 22.3290,
            lng: 91.8110,
            type: "Hotel"
        }

    ];


    // Add markers

    homeMapPlaces.forEach(function(place) {

        let markerColor = "#e31b23";


        if (place.type === "Hotel") {

            markerColor = "#1976d2";

        }


        if (place.type === "Hospital") {

            markerColor = "#2e7d32";

        }


        if (place.type === "Transport") {

            markerColor = "#7b1fa2";

        }


        const marker = L.circleMarker(
            [place.lat, place.lng],
            {
                radius: 8,

                fillColor: markerColor,

                color: "#ffffff",

                weight: 2,

                fillOpacity: 0.9
            }
        );


        marker.bindPopup(`

            <div style="min-width:160px">

                <h3 style="margin-bottom:6px;">
                    ${place.name}
                </h3>

                <p style="margin:0;">
                    ${place.type}
                </p>

            </div>

        `);


        marker.addTo(homeMap);

    });

}
function openFoodDetails() {

    const foodDetails =
        document.getElementById("foodDetails");

    if (foodDetails) {

        foodDetails.classList.add("show-food");

        foodDetails.scrollIntoView({
            behavior: "smooth"
        });

    }
}
/* =====================================================
   HOTEL DETAILS
===================================================== */

function openHotelDetails() {

    const hotelDetails =
        document.getElementById("hotelDetails");

    if (hotelDetails) {

        hotelDetails.classList.add("show-hotels");

        hotelDetails.scrollIntoView({
            behavior: "smooth"
        });

    }
}
// ================= CULTURAL EVENTS =================

function openEventDetails() {

    const eventDetails = document.getElementById("eventDetails");

    if (eventDetails) {

        eventDetails.classList.add("show-events");

        eventDetails.scrollIntoView({
            behavior: "smooth"
        });

    }

}
// =====================================================
// BEACH DETAILS
// =====================================================

function openBeachDetails() {

    const beachDetails =
        document.getElementById("beachDetails");

    if (beachDetails) {

        beachDetails.classList.add("show-beaches");

        beachDetails.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}
// =====================================================
// GREEN TOURISM DETAILS
// =====================================================

function openGreenDetails() {

    const greenDetails =
        document.getElementById("greenDetails");

    if (greenDetails) {

        greenDetails.classList.add("show-green");

        greenDetails.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}
function openWaterfallDetails() {

    const waterfallDetails =
        document.getElementById("waterfallDetails");

    if (waterfallDetails) {

        waterfallDetails.classList.add("show-waterfalls");

        waterfallDetails.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}
/* =====================================================
   TRAVEL ESSENTIALS
   ===================================================== */


function openTravelDetail(type) {

    console.log("Travel clicked:", type);

    const detailsSection =
        document.getElementById("travelDetails");


    if (!detailsSection) {

        console.log("ERROR: travelDetails not found");

        return;

    }


    const allDetails =
        document.querySelectorAll(".travel-detail-content");


    /* Hide every detail */

    allDetails.forEach(function(section) {

        section.style.display = "none";

    });


    let selectedSection = null;


    /* BUS */

    if (type === "bus") {

        selectedSection =
            document.getElementById("busDetails");

    }


    /* AIRLINES */

    else if (type === "airlines") {

        selectedSection =
            document.getElementById("airlinesDetails");

    }


    /* TRAIN */

    else if (type === "train") {

        selectedSection =
            document.getElementById("trainDetails");

    }


    /* TOUR GUIDE */

    else if (type === "tour-guide") {

        selectedSection =
            document.getElementById("tour-guideDetails");

    }


    /* SHOPPING */

    else if (type === "shopping") {

        selectedSection =
            document.getElementById("shoppingDetails");

    }


    /* SHOW */

    if (selectedSection) {

        detailsSection.style.display = "block";

        selectedSection.style.display = "block";


        detailsSection.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

    else {

        console.log(
            "ERROR: selected detail not found for:",
            type
        );

    }

}



/* =====================================================
   NAVBAR → TRAVEL ESSENTIALS
   ===================================================== */


function goToTravelEssentials() {

    const travelSection =
        document.getElementById("travelEssentials");


    if (travelSection) {

        travelSection.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}



/* =====================================================
   TRAVEL ARROWS
   ===================================================== */


function previousTravelItem() {

    const slider =
        document.querySelector(".travel-essential-slider");


    if (slider) {

        slider.scrollBy({

            left: -250,

            behavior: "smooth"

        });

    }

}



function nextTravelItem() {

    const slider =
        document.querySelector(".travel-essential-slider");


    if (slider) {

        slider.scrollBy({

            left: 250,

            behavior: "smooth"

        });

    }

}
/* ================= HERITAGE SLIDER ================= */

const heritagePlaces = [

    {
        image: "images/anderkilla.jpg",
        name: "Anderkilla Shahi Jame Mosque",
        location: "Anderkilla, Chattogram",
        description:
            "A historic Mughal-era mosque built in 1667, closely connected with the history of Chattogram."
    },

    {
        image: "images/war-cemetery.jpg",
        name: "Chattogram War Cemetery",
        location: "Dampara, Chattogram",
        description:
            "A peaceful World War II cemetery that commemorates soldiers who lost their lives during the war."
    },

    {
        image: "images/ethnological-museum.jpg",
        name: "Ethnological Museum",
        location: "Agrabad, Chattogram",
        description:
            "A cultural museum showcasing the traditions, lifestyles and heritage of different communities of Bangladesh."
    },

    {
        image: "images/mini-bangladesh.jpg",
        name: "Mini Bangladesh",
        location: "Chandgaon, Chattogram",
        description:
            "A landmark complex featuring miniature replicas of important historical and architectural sites of Bangladesh."
    },

    {
        image: "images/chandanpura-mosque.jpg",
        name: "Chandanpura Mosque",
        location: "Chawkbazar, Chattogram",
        description:
            "A colourful historic mosque known for its distinctive domes, minarets and beautiful architectural design."
    }

];


let currentHeritage = 0;


/* OPEN HERITAGE SECTION */

function showHeritageDetails() {

    const heritageSection =
        document.getElementById("heritageDetails");

    if (heritageSection) {

        heritageSection.classList.add("show-heritage");

        heritageSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* CHANGE MAIN PLACE */

function changeHeritage(index) {

    currentHeritage = index;

    const place = heritagePlaces[index];

    document.getElementById("heritageMainImage").src =
        place.image;

    document.getElementById("heritageMainImage").alt =
        place.name;

    document.getElementById("heritagePlaceName").textContent =
        place.name;

    document.getElementById("heritageLocation").textContent =
        place.location;

    document.getElementById("heritageDescription").textContent =
        place.description;


    /* ACTIVE THUMBNAIL */

    const thumbnails =
        document.querySelectorAll(".heritage-thumb");

    thumbnails.forEach(function(thumb) {

        thumb.classList.remove("active");

    });

    if (thumbnails[index]) {

        thumbnails[index].classList.add("active");

    }

}


/* NEXT */

function nextHeritage() {

    currentHeritage++;

    if (currentHeritage >= heritagePlaces.length) {

        currentHeritage = 0;

    }

    changeHeritage(currentHeritage);

}


/* PREVIOUS */

function previousHeritage() {

    currentHeritage--;

    if (currentHeritage < 0) {

        currentHeritage =
            heritagePlaces.length - 1;

    }

    changeHeritage(currentHeritage);

}
/* ================= ISLAND SLIDER ================= */

const islandPlaces = [

    {
        image: "images/sandwip-island.jpg",
        name: "Sandwip Island",
        location: "Sandwip, Chattogram",
        description:
            "Sandwip Island is a beautiful coastal island known for its natural scenery, beaches and peaceful island environment."
    },

    {
        image: "images/amanullah-char.jpg",
        name: "Amanullah Char",
        location: "Sandwip, Chattogram",
        description:
            "Amanullah Char is a scenic coastal area surrounded by open landscapes, waterways and the natural beauty of the island region."
    },

    {
        image: "images/urir-char.jpg",
        name: "Urir Char",
        location: "Sandwip Channel, Chattogram",
        description:
            "Urir Char is a remote coastal char known for its quiet surroundings, open landscapes and beautiful views of the waterways."
    },

    {
        image: "images/kalapania.jpg",
        name: "Kalapania",
        location: "Sandwip, Chattogram",
        description:
            "Kalapania is a peaceful coastal area where visitors can experience the natural landscape and everyday life of the island region."
    },

    
];


let currentIsland = 0;


/* OPEN ISLAND SECTION */

function showIslandDetails() {

    const islandSection =
        document.getElementById("islandDetails");

    if (islandSection) {

        islandSection.classList.add("show-islands");

        islandSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* CHANGE ISLAND */

function changeIsland(index) {

    currentIsland = index;

    const island = islandPlaces[index];


    document.getElementById("islandMainImage").src =
        island.image;

    document.getElementById("islandMainImage").alt =
        island.name;


    document.getElementById("islandPlaceName").textContent =
        island.name;


    document.getElementById("islandLocation").textContent =
        island.location;


    document.getElementById("islandDescription").textContent =
        island.description;


    /* ACTIVE THUMBNAIL */

    const thumbnails =
        document.querySelectorAll(".island-thumb");


    thumbnails.forEach(function(thumb) {

        thumb.classList.remove("active");

    });


    if (thumbnails[index]) {

        thumbnails[index].classList.add("active");

    }

}


/* NEXT */

function nextIsland() {

    currentIsland++;

    if (currentIsland >= islandPlaces.length) {

        currentIsland = 0;

    }

    changeIsland(currentIsland);

}


/* PREVIOUS */

function previousIsland() {

    currentIsland--;

    if (currentIsland < 0) {

        currentIsland = islandPlaces.length - 1;

    }

    changeIsland(currentIsland);

}
/* ================= RELIGIOUS PLACES SLIDER ================= */

const religiousPlaces = [

    {
        image: "images/bayazid-bostami.jpg",
        name: "Bayazid Bostami Shrine",
        location: "Nasirabad, Chattogram",
        description:
            "Bayazid Bostami Shrine is an important religious and historical site in Chattogram, visited by devotees and visitors throughout the year."
    },

    {
        image: "images/anderkilla.jpg",
        name: "Anderkilla Shahi Jame Mosque",
        location: "Anderkilla, Chattogram",
        description:
            "Anderkilla Shahi Jame Mosque is a historic Mughal-era mosque built in 1667 and is an important part of the religious heritage of Chattogram."
    },

    {
        image: "images/chandranath-temple.jpg",
        name: "Chandranath Temple",
        location: "Sitakunda, Chattogram",
        description:
            "Chandranath Temple is an important Hindu pilgrimage site located on Chandranath Hill, surrounded by beautiful hills and natural scenery."
    },

    {
        image: "images/chandanpura-mosque.jpg",
        name: "Chandanpura Mosque",
        location: "Chawkbazar, Chattogram",
        description:
            "Chandanpura Mosque is a colourful historic mosque known for its distinctive domes, minarets and attractive architectural design."
    },

    {
        image: "images/shah-mohsen-aulia.jpg",
        name: "Hazrat Shah Mohsen Aulia (R.) Mazar",
        location: "Chattogram",
        description:
            "Hazrat Shah Mohsen Aulia (R.) Mazar is a respected religious site associated with spiritual heritage and visited by devotees."
    }

];


let currentReligious = 0;


/* OPEN RELIGIOUS SECTION */

function showReligiousDetails() {

    const religiousSection =
        document.getElementById("religiousDetails");

    if (religiousSection) {

        religiousSection.classList.add("show-religious");

        religiousSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* CHANGE RELIGIOUS PLACE */

function changeReligious(index) {

    currentReligious = index;

    const place = religiousPlaces[index];


    document.getElementById("religiousMainImage").src =
        place.image;

    document.getElementById("religiousMainImage").alt =
        place.name;


    document.getElementById("religiousPlaceName").textContent =
        place.name;


    document.getElementById("religiousLocation").textContent =
        place.location;


    document.getElementById("religiousDescription").textContent =
        place.description;


    /* ACTIVE THUMBNAIL */

    const thumbnails =
        document.querySelectorAll(".religious-thumb");


    thumbnails.forEach(function(thumb) {

        thumb.classList.remove("active");

    });


    if (thumbnails[index]) {

        thumbnails[index].classList.add("active");

    }

}


/* NEXT */

function nextReligious() {

    currentReligious++;

    if (currentReligious >= religiousPlaces.length) {

        currentReligious = 0;

    }

    changeReligious(currentReligious);

}


/* PREVIOUS */

function previousReligious() {

    currentReligious--;

    if (currentReligious < 0) {

        currentReligious =
            religiousPlaces.length - 1;

    }

    changeReligious(currentReligious);


}
/* =========================================
   BEACH DATA
========================================= */

const beachPlaces = [

    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Patenga%20sea%20beach%20001.jpg",

        name:
            "Patenga Sea Beach",

        location:
            "Patenga, Chattogram City",

        description:
            "Patenga Sea Beach is one of the most popular coastal destinations of Chattogram, known for its sea views, sunset and nearby port activities."
    },


    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Parki%20Beach1.jpg",

        name:
            "Parki Sea Beach",

        location:
            "Anwara, Chattogram",

        description:
            "Parki Sea Beach is a scenic coastal destination near the Karnaphuli estuary, known for its sandy shore, sea views and peaceful natural surroundings."
    },


    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Guliakhali%20sea%20beach%20chottogram%2C%20Bangladesh.jpg",

        name:
            "Guliakhali Sea Beach",

        location:
            "Muradpur, Sitakunda, Chattogram",

        description:
            "Guliakhali Sea Beach is known for its unique green coastal landscape, trees, mudflats and beautiful views of the Bay of Bengal."
    },


    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bashbaria%20sea%20beach.jpg",

        name:
            "Banshbaria Sea Beach",

        location:
            "Banshbaria, Sitakunda, Chattogram",

        description:
            "Banshbaria Sea Beach is a popular coastal destination known for its wide shoreline, scenic sea views and the long jetty extending into the water."
    },


    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Banshkhali%20Sea%20Beach%2002.jpg",

        name:
            "Banshkhali Sea Beach",

        location:
            "Banshkhali, Chattogram",

        description:
            "Banshkhali Sea Beach offers a long coastal landscape with open sea views, sandy areas and a peaceful natural environment."
    },


    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kumira%20Ghat%2C%20Chittagong.jpg",

        name:
            "Kumira Coastal Area",

        location:
            "Kumira, Sitakunda, Chattogram",

        description:
            "Kumira is a coastal area of Chattogram known for its river-sea landscape, ferry facilities, boats and scenic views around the coast."
    },


    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/A%20girl%20watching%20the%20view%20of%20nature.jpg",

        name:
            "Kattali Beach",

        location:
            "South Kattali, Chattogram City",

        description:
            "Kattali Beach is a coastal area within Chattogram city where visitors can enjoy open sea views, fresh air and a quieter shoreline."
    },


    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sagoria%20Beach%20Chittagong%20%281%29.jpg",

        name:
            "Sagoria Beach",

        location:
            "Chattogram",

        description:
            "Sagoria Beach is a coastal destination of Chattogram offering open shoreline views and a peaceful environment beside the Bay of Bengal."
    },


    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aananda%20Bazar%20sea%20beach.JPG",

        name:
            "Anandabazar Beach",

        location:
            "Halishahar, Chattogram City",

        description:
            "Anandabazar is a coastal beach area of Chattogram known for its open shoreline, natural landscape and beautiful views of the sea."
    },


    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Halishahar%20sea%20beach%20chittagong.jpg",

        name:
            "Halishahar Beach",

        location:
            "Halishahar, Chattogram City",

        description:
            "Halishahar Beach is a coastal area within Chattogram city where visitors can enjoy the open Bay of Bengal, fresh air and sunset views."
    }

];


let currentBeach = 0;


/* =========================================
   SHOW BEACH DETAILS
========================================= */

function showBeachDetails() {

    const beachSection =
        document.getElementById("beachDetails");

    if (beachSection) {

        beachSection.classList.add("show-beaches");

        beachSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================
   CHANGE BEACH
========================================= */

function changeBeach(index) {

    currentBeach = index;

    const beach =
        beachPlaces[index];


    document.getElementById(
        "beachMainImage"
    ).src = beach.image;


    document.getElementById(
        "beachMainImage"
    ).alt = beach.name;


    document.getElementById(
        "beachPlaceName"
    ).textContent = beach.name;


    document.getElementById(
        "beachLocation"
    ).textContent = beach.location;


    document.getElementById(
        "beachDescription"
    ).textContent = beach.description;


    const thumbnails =
        document.querySelectorAll(
            ".beach-thumb"
        );


    thumbnails.forEach(function(thumb) {

        thumb.classList.remove("active");

    });


    if (thumbnails[index]) {

        thumbnails[index].classList.add("active");

    }

}


/* =========================================
   NEXT BEACH
========================================= */

function nextBeach() {

    currentBeach++;

    if (
        currentBeach >=
        beachPlaces.length
    ) {

        currentBeach = 0;

    }

    changeBeach(currentBeach);

}


/* =========================================
   PREVIOUS BEACH
========================================= */

function previousBeach() {

    currentBeach--;

    if (currentBeach < 0) {

        currentBeach =
            beachPlaces.length - 1;

    }

    changeBeach(currentBeach);

}
/* =========================================
   WATERFALL DATA
========================================= */

const waterfallPlaces = [

    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Khoiyachora%20Waterfall%2C%20Mirosorai%2C%20Chittagong%2C.JPG",

        name:
            "Khoiyachora Waterfall",

        location:
            "Mirsharai, Chattogram",

        description:
            "Khoiyachora Waterfall is one of the most popular waterfalls of Chattogram, known for its beautiful multi-step cascades, rocky trails and lush green hill surroundings."
    },


    {
        image:
            "https://upload.wikimedia.org/wikipedia/commons/0/00/%E0%A6%AC%E0%A6%B0%E0%A7%8D%E0%A6%B7%E0%A6%BE%E0%A6%B0_%E0%A6%B8%E0%A7%8C%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A7%8D%E0%A6%AF_%E0%A6%B8%E0%A7%81%E0%A6%AA%E0%A7%8D%E0%A6%A4%E0%A6%A7%E0%A6%BE%E0%A6%B0%E0%A6%BE_%E0%A6%9D%E0%A6%B0%E0%A7%8D%E0%A6%A3%E0%A6%BE_01.jpg",

        name:
            "Suptadhara Waterfall",

        location:
            "Sitakunda, Chattogram",

        description:
            "Suptadhara Waterfall is located inside the Sitakunda Eco Park and is surrounded by evergreen forest, rocky landscapes and beautiful natural scenery."
    },


    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Shahasradhara%20Waterfall.jpg",

        name:
            "Shahasradhara Waterfall",

        location:
            "Sitakunda, Chattogram",

        description:
            "Shahasradhara Waterfall is a scenic waterfall inside the Sitakunda Botanical Garden and Eco-Park, surrounded by hills, forest and flowing streams."
    },


    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Napittachora%20Waterfall.jpg",

        name:
            "Napittachora Waterfall",

        location:
            "Mirsharai, Chattogram",

        description:
            "Napittachora Waterfall is part of a popular trekking trail in Mirsharai, featuring rocky paths, forest scenery and several beautiful cascades."
    },


    {
        image:
            "https://s0.wklcdn.com/image_20/605439/45427029/29868117Master.jpg",

        name:
            "Komoldoho Waterfall",

        location:
            "Mirsharai, Chattogram",

        description:
            "Komoldoho Waterfall is surrounded by dense greenery and rocky landscapes, creating a peaceful natural setting for trekking and photography."
    },


    {
        image:
            "https://assets.roar.media/assets/zTIwozLzqLikqNWL_%E0%A6%B8%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%87%E0%A6%9B%E0%A7%9C%E0%A6%BF-%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%87%E0%A6%B2.jpg?w=1200",

        name:
            "Sonaichora Waterfall",

        location:
            "Mirsharai, Chattogram",

        description:
            "Sonaichora Waterfall lies within a rugged green trail surrounded by rocks, forest and flowing streams, offering an adventurous experience for nature lovers."
    },


    {
        image:
            "https://adarbepari.com/wp-content/uploads/2019/08/horinmara-jhorna-sitakunda.jpg",

        name:
            "Horinmara Waterfall",

        location:
            "Mirsharai, Chattogram",

        description:
            "Horinmara Waterfall is a beautiful forest waterfall with a natural pool below it. The surrounding greenery and rocky trail make it a popular trekking destination."
    },


    {
        image:
            "https://i.postimg.cc/Y2mSmWmb/Zorna-03-2.jpg",

        name:
            "Hatuvanga Waterfall",

        location:
            "Mirsharai, Chattogram",

        description:
            "Hatuvanga Waterfall is located near Horinmara on the same trail. Its rocky surroundings become especially attractive during the rainy season."
    },


    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/June%202025%20photo%20of%20Baghbiyani%20Waterfall%20by%20Owais%20Al%20Qarni%2004.jpg",

        name:
            "Baghbiyani Waterfall",

        location:
            "Mirsharai, Chattogram",

        description:
            "Baghbiyani Waterfall is one of the scenic waterfalls along the Napittachora trail, surrounded by dense forest, rocks and natural streams."
    },


    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Napittachora%20Fountain%20Mirsharai%20%281%29%20-%209.jpg",

        name:
            "Kupikatakum Waterfall",

        location:
            "Mirsharai, Chattogram",

        description:
            "Kupikatakum Waterfall is one of the waterfalls of the Napittachora trail, surrounded by rocky terrain, forest and flowing mountain streams."
    }

];


let currentWaterfall = 0;


/* =========================================
   SHOW WATERFALL DETAILS
========================================= */

function showWaterfallDetails() {

    const waterfallSection =
        document.getElementById("waterfallDetails");


    if (waterfallSection) {

        waterfallSection.classList.add(
            "show-waterfalls"
        );


        waterfallSection.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}


/* =========================================
   CHANGE WATERFALL
========================================= */

function changeWaterfall(index) {

    currentWaterfall = index;


    const waterfall =
        waterfallPlaces[index];


    document.getElementById(
        "waterfallMainImage"
    ).src = waterfall.image;


    document.getElementById(
        "waterfallMainImage"
    ).alt = waterfall.name;


    document.getElementById(
        "waterfallPlaceName"
    ).textContent = waterfall.name;


    document.getElementById(
        "waterfallLocation"
    ).textContent = waterfall.location;


    document.getElementById(
        "waterfallDescription"
    ).textContent = waterfall.description;


    const thumbnails =
        document.querySelectorAll(
            ".waterfall-thumb"
        );


    thumbnails.forEach(function(thumb) {

        thumb.classList.remove("active");

    });


    if (thumbnails[index]) {

        thumbnails[index].classList.add(
            "active"
        );

    }

}


/* =========================================
   NEXT WATERFALL
========================================= */

function nextWaterfall() {

    currentWaterfall++;


    if (
        currentWaterfall >=
        waterfallPlaces.length
    ) {

        currentWaterfall = 0;

    }


    changeWaterfall(currentWaterfall);

}


/* =========================================
   PREVIOUS WATERFALL
========================================= */

function previousWaterfall() {

    currentWaterfall--;


    if (currentWaterfall < 0) {

        currentWaterfall =
            waterfallPlaces.length - 1;

    }


    changeWaterfall(currentWaterfall);

}
/* =========================================
   PARKS & NATURE DATA
========================================= */

const naturePlaces = [

    
        {
    image: "images/foys-lake1.jpg",
    name: "Foy's Lake",
    location: "Pahartali, Chattogram",
    description:
        "A scenic man-made lake surrounded by green hills, offering a peaceful natural environment and recreational activities."
},


    {
        image:
            "https://img.truvvle.com/?src=aHR0cHM6Ly9pbWcudHJhdmVsZmVlZC5pby9oYWZpenVsbGFoJTJGMjAyMDA0MDlUMDQxNzE2NjYxWi1TLTguanBn&width=1920",

        name:
            "Sitakunda Botanical Garden & Eco Park",

        location:
            "Muradpur, Sitakunda, Chattogram",

        description:
            "Sitakunda Eco Park is a large natural area featuring forests, botanical gardens, hills and waterfalls. It is known for its rich greenery and biodiversity."
    },


    {
        image:
            "https://images.ecency.com/DQmUC9AHc9thViz2EVrEzVZDmr3ykMUMJeohhD3BifecGsD/img_20231021_163630.jpg",

        name:
            "Mahamaya Lake & Eco Park",

        location:
            "Mirsharai, Chattogram",

        description:
            "Mahamaya is a scenic natural destination featuring a large lake surrounded by green hills and forests. Boating and peaceful lakeside views are among its main attractions."
    },


    {
        image:
            "https://d34vm3j4h7f97z.cloudfront.net/optimized/3X/2/3/23444bfe3cef9052e6f8da19809c83b54e8589b2_2_666x500.jpeg",

        name:
            "Bhatiary Lake",

        location:
            "Bhatiary, Chattogram",

        description:
            "Bhatiary Lake is surrounded by green hills and peaceful natural landscapes. The calm water, scenic surroundings and sunset views make it a popular nature destination."
    },


    {
        image:
            "https://softwebsys.s3.us-east-1.amazonaws.com/uploads/1763033092992-ds-prk-4.width-750.webp",

        name:
            "DC Park",

        location:
            "Salimpur, Chattogram",

        description:
            "DC Park is a landscaped recreational park beside a large water body. Its gardens, flower displays, walking areas and open surroundings make it a pleasant family destination."
    },


    {
        image:
            "https://dscdn.daily-sun.com/english/uploads/news_photos/2018/09/10/daily-sun-2018-09-10-68.jpg",

        name:
            "Jamboree Park",

        location:
            "Agrabad, Chattogram",

        description:
            "Jamboree Park is a modern urban park featuring landscaped open spaces, interconnected water bodies, fountains and walking paths. Its illuminated evening scenery is particularly attractive."
    },


    {
    image: "images/biplob-udyan.jpg",
    name: "Biplob Udyan",
    location: "2 No. Gate, Chattogram",
    description:
        "A well-known urban park in Chattogram, surrounded by greenery and located near the city's busy 2 No. Gate area."
},


    {
        image:
            "https://commons.wikimedia.org/wiki/Special:Redirect/file/Butterfly%20Park%20Bangladesh%20%2801%29.jpg",

        name:
            "Butterfly Park Bangladesh",

        location:
            "Patenga, Chattogram",

        description:
            "Butterfly Park Bangladesh is an ecological garden featuring live butterflies, flowers, an artificial lake, waterfalls and a butterfly museum. It offers a nature-focused experience for visitors."
    },


    {
        image:
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",

        name:
            "Forest Academy Botanical Park",

        location:
            "Shaloshahar, Chattogram",

        description:
            "Forest Academy Botanical Park is a peaceful green space surrounded by trees and natural vegetation. It offers visitors an opportunity to enjoy greenery and a quieter environment inside the city."
    },


    {
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",

        name:
            "Karnaphuli Mariners Park",

        location:
            "Chattogram",

        description:
            "Karnaphuli Mariners Park is a riverside recreational space where visitors can enjoy open surroundings, fresh air and views around the Karnaphuli area."
    }

];


let currentNature = 0;


/* =========================================
   SHOW NATURE DETAILS
========================================= */

function showNatureDetails() {

    const natureSection =
        document.getElementById("natureDetails");


    if (natureSection) {

        natureSection.classList.add(
            "show-nature"
        );


        natureSection.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}


/* =========================================
   CHANGE NATURE PLACE
========================================= */

function changeNature(index) {

    currentNature = index;


    const place =
        naturePlaces[index];


    document.getElementById(
        "natureMainImage"
    ).src = place.image;


    document.getElementById(
        "natureMainImage"
    ).alt = place.name;


    document.getElementById(
        "naturePlaceName"
    ).textContent = place.name;


    document.getElementById(
        "natureLocation"
    ).textContent = place.location;


    document.getElementById(
        "natureDescription"
    ).textContent = place.description;


    const thumbnails =
        document.querySelectorAll(
            ".nature-thumb"
        );


    thumbnails.forEach(function(thumb) {

        thumb.classList.remove("active");

    });


    if (thumbnails[index]) {

        thumbnails[index].classList.add(
            "active"
        );

    }

}


/* =========================================
   NEXT
========================================= */

function nextNature() {

    currentNature++;


    if (
        currentNature >=
        naturePlaces.length
    ) {

        currentNature = 0;

    }


    changeNature(currentNature);

}


/* =========================================
   PREVIOUS
========================================= */

function previousNature() {

    currentNature--;


    if (currentNature < 0) {

        currentNature =
            naturePlaces.length - 1;

    }


    changeNature(currentNature);

}
/* =====================================================
   HILLS & MOUNTAINS
===================================================== */

const hillPlaces = [

    {
        image: "images/chandranath.jpg",

        name: "Chandranath Hill",

        location: "Sitakunda, Chattogram",

        description:
            "The highest peak of the Chattogram Western Hill Range, known for its scenic views, forested trails and Chandranath Temple."
    },


    {
        image: "images/batali-hill.jpg",

        name: "Batali Hill",

        location: "Lalkhan Bazar, Chattogram",

        description:
            "A well-known hill in the heart of Chattogram, offering an elevated view of the surrounding city."
    },


    {
        image: "images/crb-hill.jpg",

        name: "CRB Hill",

        location: "CRB, Chattogram",

        description:
            "A green hill area surrounded by trees and natural scenery, known for its peaceful environment in the city."
    },


    {
        image: "images/jilapi-pahar.jpg",

        name: "Jilapi Pahar",

        location: "Lalkhan Bazar, Chattogram",

        description:
            "A scenic hill area associated with Batali Hill, known for its winding road and elevated city views."
    },


    {
        image: "images/tiger-pass.jpg",

        name: "Tiger Pass Hill",

        location: "Tiger Pass, Chattogram",

        description:
            "A prominent hilly area of Chattogram surrounded by roads, greenery and elevated urban landscapes."
    },


    {
        image: "images/moti-jharna.jpg",

        name: "Moti Jharna Hill",

        location: "Chattogram City",

        description:
            "A naturally green hilly area of Chattogram that contributes to the city's distinctive landscape."
    },


    {
        image: "images/court-hill.jpg",

        name: "Court Hill",

        location: "Kotwali, Chattogram",

        description:
            "A historic hill area in central Chattogram, surrounded by important civic and urban landmarks."
    },


    {
        image: "images/dc-hill.jpg",

        name: "DC Hill",

        location: "Nandan Kanan, Chattogram",

        description:
            "A well-known green hill area in the city, surrounded by trees and used as an open recreational space."
    },


    {
        image: "images/foys-lake-hill.jpg",

        name: "Foy's Lake Hill Area",

        location: "Pahartali, Chattogram",

        description:
            "A scenic hilly landscape around Foy's Lake, combining green hills, water and peaceful natural surroundings."
    },


    {
        image: "images/nangarkhana-hill.jpg",

        name: "Nangarkhana Hill",

        location: "Chattogram",

        description:
            "A hill area located just north of Chattogram city, forming part of the wider hilly landscape of the region."
    }

];


let currentHill = 0;


/* ================= SHOW HILL DETAILS ================= */

function showHillDetails() {

    const hillSection =
        document.getElementById("hillDetails");

    if (hillSection) {

        hillSection.classList.add("show-hills");

        hillSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* ================= CHANGE HILL ================= */

function changeHill(index) {

    currentHill = index;

    const place = hillPlaces[index];


    document.getElementById("hillMainImage").src =
        place.image;

    document.getElementById("hillMainImage").alt =
        place.name;


    document.getElementById("hillPlaceName").textContent =
        place.name;


    document.getElementById("hillLocation").textContent =
        place.location;


    document.getElementById("hillDescription").textContent =
        place.description;


    const thumbnails =
        document.querySelectorAll(".hill-thumb");


    thumbnails.forEach(function(thumb) {

        thumb.classList.remove("active");

    });


    if (thumbnails[index]) {

        thumbnails[index].classList.add("active");

    }

}


/* ================= NEXT ================= */

function nextHill() {

    currentHill++;

    if (currentHill >= hillPlaces.length) {

        currentHill = 0;

    }

    changeHill(currentHill);

}


/* ================= PREVIOUS ================= */

function previousHill() {

    currentHill--;

    if (currentHill < 0) {

        currentHill = hillPlaces.length - 1;

    }

    changeHill(currentHill);

}
/* =====================================================
   HOTELS & RESORTS
===================================================== */

const hotelPlaces = [

    {
        image: "images/radisson.jpg",

        name: "Radisson Blu Hotel, Chattogram Bay View",

        location: "Lalkhan Bazar, Chattogram",

        description:
            "An upscale hotel offering modern rooms, restaurants, an infinity pool, spa, fitness facilities and event spaces."
    },


    {
        image: "images/peninsula.jpg",

        name: "The Peninsula Chittagong",

        location: "O.R. Nizam Road, Chattogram",

        description:
            "An established city hotel offering comfortable rooms and suites, dining facilities, swimming pool, fitness centre, spa and event spaces."
    },


    {
        image: "images/hotel-agrabad.jpg",

        name: "Hotel Agrabad",

        location: "Agrabad C/A, Chattogram",

        description:
            "A long-established city hotel featuring rooms and suites, restaurants, swimming facilities, spa services, fitness facilities and conference spaces."
    },


    {
        image: "images/best-western-sks.jpg",

        name: "Best Western SKS Chattogram",

        location: "Agrabad C/A, Chattogram",

        description:
            "A modern hotel in the commercial area of Chattogram offering contemporary rooms, dining, fitness and business facilities."
    },


    {
        image: "images/well-park.jpg",

        name: "Well Park Residence",

        location: "O.R. Nizam Road, Chattogram",

        description:
            "A city hotel offering rooms and suites, dining facilities, Wi-Fi, parking and event facilities, suitable for both business and leisure stays."
    },


    {
        image: "images/foys-lake-resort.jpg",

        name: "Foy's Lake Resort",

        location: "Foy's Lake, Khulshi, Chattogram",

        description:
            "A lakeside resort surrounded by the natural landscape of Foy's Lake, offering accommodation and a peaceful setting for leisure and family trips."
    },


    {
        image: "images/jatra.jpg",

        name: "Jatra Flagship Chattogram City Centre",

        location: "South Khulshi, Chattogram",

        description:
            "A modern serviced accommodation offering comfortable rooms, air conditioning, Wi-Fi, breakfast and facilities suitable for short or extended stays."
    },


    {
        image: "images/brisa-marina.jpg",

        name: "Brisa Marina",

        location: "Airport Road East, Chattogram",

        description:
            "A resort-style property offering accommodation and leisure facilities in a relaxed environment, suitable for visitors looking for a comfortable getaway."
    },


    {
        image: "images/sea-world-resort.jpg",

        name: "Sea World Foy's Lake Resort",

        location: "Foy's Lake, Chattogram",

        description:
            "A resort property located around Foy's Lake, offering accommodation and a leisure-oriented environment close to the lake and surrounding attractions."
    },


    {
        image: "images/crown-city.jpg",

        name: "Hotel Crown City",

        location: "Sanmar Ocean City, Chattogram",

        description:
            "A city hotel offering comfortable accommodation in a convenient urban location, suitable for visitors staying in Chattogram."
    }

];


let currentHotel = 0;


/* ================= SHOW HOTEL DETAILS ================= */

function showHotelDetails() {

    const hotelSection =
        document.getElementById("hotelDetails");

    if (hotelSection) {

        hotelSection.classList.add("show-hotels");

        hotelSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* ================= CHANGE HOTEL ================= */

function changeHotel(index) {

    currentHotel = index;

    const place = hotelPlaces[index];


    document.getElementById("hotelMainImage").src =
        place.image;

    document.getElementById("hotelMainImage").alt =
        place.name;


    document.getElementById("hotelPlaceName").textContent =
        place.name;


    document.getElementById("hotelLocation").textContent =
        place.location;


    document.getElementById("hotelDescription").textContent =
        place.description;


    const thumbnails =
        document.querySelectorAll(".hotel-thumb");


    thumbnails.forEach(function(thumb) {

        thumb.classList.remove("active");

    });


    if (thumbnails[index]) {

        thumbnails[index].classList.add("active");

    }

}


/* ================= NEXT HOTEL ================= */

function nextHotel() {

    currentHotel++;

    if (currentHotel >= hotelPlaces.length) {

        currentHotel = 0;

    }

    changeHotel(currentHotel);

}


/* ================= PREVIOUS HOTEL ================= */

function previousHotel() {

    currentHotel--;

    if (currentHotel < 0) {

        currentHotel = hotelPlaces.length - 1;

    }

    changeHotel(currentHotel);

}
document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("destinationSearch");
    const searchButton = document.getElementById("searchButton");
    const searchResults = document.getElementById("searchResults");

    if (!searchInput || !searchResults) {
        return;
    }

    async function searchDestinations() {

        const query = searchInput.value.trim();

        if (!query) {
            searchResults.innerHTML = "";
            searchResults.style.display = "none";
            return;
        }

        try {

            const response = await fetch(
                `http://localhost:5000/api/search?q=${encodeURIComponent(query)}`
            );

            if (!response.ok) {
                throw new Error("Search request failed");
            }

            const results = await response.json();

            searchResults.innerHTML = "";

            if (results.length === 0) {

                searchResults.innerHTML = `
                    <div class="search-no-result">
                        No destination found
                    </div>
                `;

                searchResults.style.display = "block";
                return;
            }

            results.forEach(item => {

                const resultDiv = document.createElement("div");

                resultDiv.className = "search-result-item";

                resultDiv.innerHTML = `
                    <div class="search-result-name">
                        ${item.name}
                    </div>

                    <div class="search-result-category">
                        ${item.category}
                    </div>
                `;

                resultDiv.addEventListener("click", () => {

                    window.location.href = item.url;

                });

                searchResults.appendChild(resultDiv);

            });

            searchResults.style.display = "block";

        } catch (error) {

            console.error("Search error:", error);

            searchResults.innerHTML = `
                <div class="search-no-result">
                    Unable to connect to database
                </div>
            `;

            searchResults.style.display = "block";
        }
    }

    searchInput.addEventListener("input", searchDestinations);

    searchButton.addEventListener("click", searchDestinations);

    searchInput.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            searchDestinations();
        }

    });

    document.addEventListener("click", (event) => {

        if (!event.target.closest("#navSearch")) {
            searchResults.style.display = "none";
        }

    });

});





document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);

    const category = (params.get("category") || "").trim().toLowerCase();
    const placeName = (params.get("place") || "").trim().toLowerCase();

    if (!category || !placeName) {
        return;
    }

    let places = null;
    let changeFunction = null;
    let showFunction = null;

    // Beaches
    if (category === "beach") {
        places = beachPlaces;
        changeFunction = changeBeach;
        showFunction = showBeachDetails;
    }

    // Waterfalls
    else if (category === "waterfall") {
        places = waterfallPlaces;
        changeFunction = changeWaterfall;
        showFunction = showWaterfallDetails;
    }

    // Hills & Mountains
    else if (category === "hill") {
        places = hillPlaces;
        changeFunction = changeHill;
        showFunction = showHillDetails;
    }

    // Islands
    else if (category === "island") {
        places = islandPlaces;
        changeFunction = changeIsland;
        showFunction = showIslandDetails;
    }

    // Heritage & History
    else if (
        category === "historical" ||
        category === "history" ||
        category === "museum"
    ) {
        places = heritagePlaces;
        changeFunction = changeHeritage;
        showFunction = showHeritageDetails;
    }

    // Parks & Nature
    else if (
        category === "park" ||
        category === "nature" ||
        category === "lake"
    ) {
        places = naturePlaces;
        changeFunction = changeNature;
        showFunction = showNatureDetails;
    }

    // Religious Places
    else if (category === "religious") {
        places = religiousPlaces;
        changeFunction = changeReligious;
        showFunction = showReligiousDetails;
    }

    // Hotels & Resorts
    else if (
        category === "hotel" ||
        category === "resort"
    ) {
        places = hotelPlaces;
        changeFunction = changeHotel;
        showFunction = showHotelDetails;
    }

    // Category না মিললে কিছু করবে না
    if (!places) {
        return;
    }

    // Database-এর place name দিয়ে আমাদের array-এর place খুঁজবে
    const index = places.findIndex(
        place => place.name.trim().toLowerCase() === placeName
    );

    // Place পাওয়া গেলে সেই জায়গাটা দেখাবে
    if (index !== -1) {
        changeFunction(index);
        showFunction();
    }

});