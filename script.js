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