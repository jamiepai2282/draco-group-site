# DRACO GROUP 集團網站（初稿）

純靜態網站，`public/` 內是全部內容，`server.js` 是不需安裝套件的小型伺服器。

## 本機預覽

    node server.js

然後開啟 http://localhost:3000

## 部署到 Railway

1. 把這個資料夾推到一個 GitHub repo。
2. Railway 新增 Project，選 Deploy from GitHub repo，選這個 repo。
3. Railway 會偵測到 Node 專案並執行 `npm start`，不需要設定環境變數。
4. 到服務的 Settings → Networking 產生網域，把網址給同事。

## 密碼保護

在 Railway 服務的 Variables 新增兩個變數，存檔後會自動重新部署並開始要求登入：

- `SITE_USER`：共用帳號
- `SITE_PASSWORD`：共用密碼

兩個變數都刪掉就恢復成不需登入。網站目前也會告訴搜尋引擎不要收錄，正式對外時請把 `server.js` 裡相關的兩段拿掉。

## 檔案說明

- `public/index.html`：版面與樣式
- `public/i18n*.js`：四種語言的文字（繁體、簡體、英文、泰文）
- `public/tool.js`：裝櫃試算、CBM 與棧板試算、線上詢價
- `public/site.js`：換頁、語言切換、首頁動畫
- `public/assets/`：LOGO 與倉庫照片

## 尚未完成

- WMS 線上查詢尚未連接 DRACO ONE
- 線上詢價尚未連接收件信箱
- 頁面上黃底的方括號文字是待補內容
