const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/prices.db");

const prices = [

["2020-01-01","舒潔三層抽取式衛生紙100抽24包",359],

["2021-01-01","舒潔三層抽取式衛生紙100抽24包",379],

["2022-01-01","舒潔三層抽取式衛生紙100抽24包",399],

["2023-01-01","舒潔三層抽取式衛生紙100抽24包",419],

["2023-09-11","舒潔三層抽取式衛生紙100抽24包(促銷價)",349],

["2024-01-01","舒潔三層抽取式衛生紙100抽24包",499],

["2025-01-01","舒潔三層抽取式衛生紙100抽24包",599],

["2026-01-01","舒潔三層抽取式衛生紙100抽24包",649]

];

prices.forEach(item => {

    db.run(
        `
        INSERT INTO prices
        (date, product_name, price)
        VALUES (?, ?, ?)
        `,
        item
    );

});

console.log("資料匯入完成");

db.close();