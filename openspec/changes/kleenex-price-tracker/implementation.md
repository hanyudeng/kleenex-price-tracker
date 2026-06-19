# Implementation

## Step 1 建立專案

建立 Node.js 專案：

npm init -y

安裝套件：

npm install express sqlite3 cors

---

## Step 2 建立 Express Server

建立 server.js

設定：

app.use(express.json())
app.use(express.static("public"))

啟動：

node server.js

成功開啟：

http://localhost:3000

---

## Step 3 建立 SQLite

建立資料庫：

database/prices.db

建立 prices 資料表：

CREATE TABLE prices(
id INTEGER PRIMARY KEY AUTOINCREMENT,
date TEXT,
product_name TEXT,
price REAL
);

---

## Step 4 建立 API

POST /api/prices

新增價格資料

GET /api/prices

查詢全部資料

GET /api/search

搜尋商品資料

---

## Step 5 建立前端畫面

使用 Bootstrap 5 建立：

1. 價格新增表單
2. 商品搜尋功能
3. 歷史價格表格

---

## Step 6 匯入資料

建立 seed.js

匯入：

2020~2026 年舒潔三層抽取式衛生紙價格資料

---

## Step 7 測試

新增資料成功

搜尋功能成功

SQLite 資料永久保存成功

網站正常運作
