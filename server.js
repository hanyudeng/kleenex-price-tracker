const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();

const PORT = provess.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// Middleware

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// SQLite

const db = new sqlite3.Database(
    "./database/prices.db",
    (err) => {

        if(err){

            console.error(err.message);

        }else{

            console.log("SQLite 已連線");

        }

    }
);

// 建立資料表

db.run(`
CREATE TABLE IF NOT EXISTS prices(

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    date TEXT NOT NULL,

    product_name TEXT NOT NULL,

    price REAL NOT NULL

)
`);

// 新增資料

app.post("/api/prices", (req, res) => {

    const {

        date,
        product_name,
        price

    } = req.body;

    db.run(

        `
        INSERT INTO prices
        (date, product_name, price)
        VALUES (?, ?, ?)
        `,

        [date, product_name, price],

        function(err){

            if(err){

                return res.status(500).json({
                    error: err.message
                });

            }

            res.json({

                success: true,
                id: this.lastID

            });

        }

    );

});

// 查詢全部資料

app.get("/api/prices", (req, res) => {

    db.all(

        `
        SELECT *
        FROM prices
        ORDER BY date
        `,

        [],

        (err, rows) => {

            if(err){

                return res.status(500).json({
                    error: err.message
                });

            }

            res.json(rows);

        }

    );

});

// 搜尋商品

app.get("/api/search", (req, res) => {

    const keyword =
    req.query.keyword || "";

    db.all(

        `
        SELECT *
        FROM prices
        WHERE product_name LIKE ?
        ORDER BY date
        `,

        [`%${keyword}%`],

        (err, rows) => {

            if(err){

                return res.status(500).json({
                    error: err.message
                });

            }

            res.json(rows);

        }

    );

});

// 首頁測試

app.get("/api/test", (req, res) => {

    res.json({

        message: "API 正常運作"

    });

});

// 啟動 Server

const PORT = 3000;

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});