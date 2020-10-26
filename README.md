# F2E 旅館預約練習
## 使用技術:
1. vueCLI - VueX、VueRouter
2. boostrap - vue
3. fontAwesome - vue
4. axios
5. V-Calendar
6. RWD

## 練習時間:
約 2 週(code review、程式重構)

## 功能說明:
### 首頁：
* 能看到所有房型，並能點擊任一房型，進入到單一房型頁面觀看更多
### 單一房型頁面：
* 客戶可以觀看該房型詳細資訊，例如旅館描述、平日價格(一四)、假日價格(五日)、checkIn 時間、其他服務，詳細資訊欄位請參考此連結。
* 客戶可以用日曆方式，瀏覽未來 90 天已預約與尚未預約的時段。範例一、範例二
* 客戶在選擇預約日期時，會即時顯示訂房價格總價
* 客戶可以線上訂房，需填寫的欄位有欄位：姓名、電話、預約起迄
    * 只能預約未來 90 天內的時段
* 若預約失敗，會回傳訊息讓客戶知曉，失敗原因項目如下
    * 預約時間已被人預訂
    * 您預約的是過去時間，例如昨天

## 遇到困難點:
1. API串接 ( 3 支 Restful API 串接)
2. VueX 資料流整理
3. VueRouter 使用
4. boostap-vue 使用
5. axios 使用
6. V-Calendar 使用
7. 時間格式處理 new Date()、getDate()、getDay()、getTime()、toLocaleDateString() 等
8. API 封裝

## 解決方式:
1. 手作實驗測試與練習
2. MDN文件查找
3. Vue.js 官方文件
4. boostrap-vue 官方文件
5. axios 官方文件
6. V-Calendar 官方文件