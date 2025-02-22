# 📊 Price Tracker Web

A **Price Tracker and Comparison Platform** that helps users monitor product prices across multiple e-commerce websites. It sends alerts when prices drop or a product goes out of stock, ensuring users get the best deals.

## 🚀 Features

- 🛒 **Track Prices**: Monitor product prices from different websites.
- 🔔 **Price Drop Alerts**: Get email notifications when a product's price drops.
- ⏳ **Stock Updates**: Know when an item is back in stock.
- 📊 **Price History**: View past price trends to decide the best buying time.
- 🖥 **User-Friendly Dashboard**: Interactive UI to manage tracking lists.
- 🔍 **Comparison Feature**: Compare product prices from different sources.

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Web Scraping:** Puppeteer / Cheerio
- **Authentication:** JWT, OAuth
- **Hosting:** Vercel (Frontend), Render / Heroku (Backend)

## 📌 Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/grasyPatel/Price_Tracker.git
   cd price-tracker
   ```

2. **Set up the backend**
   ```sh
   cd price-tracker-backend
   npm install
   cp .env.example .env  # Add your MongoDB and API credentials
   npm run dev
   ```

3. **Set up the frontend**
   ```sh
   cd ../price-tracker-frontend
   npm install
   npm start
   ```

## 🔐 Environment Variables
Create a `.env` file in the backend folder and add:
```sh
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_SERVICE_API=your_email_api_key
```




