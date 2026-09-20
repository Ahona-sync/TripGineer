const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");

const app = express();


// ===============================
// MySQL DATABASE CONNECTION
// ===============================

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sHaRmIn@I12",
    database: "tripgineer"
});


// ===============================
// CONNECT DATABASE
// ===============================

db.connect((err) => {

    if (err) {
        console.log("MySQL connection failed:", err);
        return;
    }

    console.log("MySQL connected!");

});


// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());
app.use(express.json());


// ===============================
// TEST BACKEND
// ===============================

app.get("/", (req, res) => {

    res.send("Backend is working!");

});


// ===============================
// SEARCH API
// ===============================

app.get("/api/search", (req, res) => {

    const query = req.query.q;

    // Empty search
    if (!query || query.trim() === "") {

        return res.json([]);

    }


    // SQL search
    const searchQuery = `
        SELECT id, name, category, url
        FROM search_items
        WHERE name LIKE ?
        OR category LIKE ?
        ORDER BY name ASC
        LIMIT 10
    `;


    const searchValue = `%${query}%`;


    // Run database query
    db.query(
        searchQuery,
        [searchValue, searchValue],

        (err, results) => {

            if (err) {

                console.error(
                    "Search query failed:",
                    err
                );

                return res.status(500).json({

                    error: "Database search failed"

                });

            }


            // Send search results
            res.json(results);

        }

    );

});


// ===============================
// START SERVER
// ===============================

app.listen(5000, () => {

    console.log(
        "Server running on port 5000"
    );

});