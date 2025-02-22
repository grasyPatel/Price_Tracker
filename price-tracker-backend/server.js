require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
console.log("MONGO_URI:", process.env.MONGO_URI);





const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", productRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Failed", err));

app.get("/", (req, res) => {
  res.send("Price Tracker API is running...");
});
app.get("/api/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
