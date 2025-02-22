const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product"); // Adjust the path based on your project structure

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected for Seeding"))
  .catch((error) => console.log(`MongoDB Connection Error: ${error}`));

// Sample Products Data
const sampleProducts = [
    {
        name: "iPhone 15 Pro",
        price: 999,
        url: "https://www.apple.com/iphone-15-pro/",
        image: "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?ga=GA1.1.1362677615.1732175022&semt=ais_hybrid",
    },
    {
        name: "Samsung Galaxy S23 Ultra",
        price: 1199,
        url: "https://www.samsung.com/galaxy-s23-ultra/",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "MacBook Air M2",
        price: 1299,
        url: "https://www.apple.com/macbook-air-m2/",
        image: "https://via.placeholder.com/150",
    },
];

// Insert Sample Data
const seedDatabase = async () => {
    try {
        await Product.deleteMany(); // Clear existing products
        await Product.insertMany(sampleProducts);
        console.log("Sample Products Added!");
        mongoose.connection.close();
    } catch (error) {
        console.log(`Error Seeding Database: ${error}`);
        mongoose.connection.close();
    }
};

seedDatabase();
