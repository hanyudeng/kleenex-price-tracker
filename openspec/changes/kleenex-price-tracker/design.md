# Design

## 系統架構

Frontend

* HTML
* CSS
* Bootstrap 5
* JavaScript

Backend

* Node.js
* Express.js

Database

* SQLite

## 系統流程

使用者輸入價格資料

↓

前端透過 Fetch 呼叫 API

↓

Express 接收資料

↓

SQLite 儲存資料

↓

查詢資料時從 SQLite 讀取

↓

回傳 JSON 給前端顯示

## API 設計

POST /api/prices

新增價格資料

GET /api/prices

取得全部價格資料

GET /api/search

依商品名稱搜尋價格資料

## 資料表設計

prices

* id INTEGER PRIMARY KEY AUTOINCREMENT
* date TEXT
* product_name TEXT
* price REAL
