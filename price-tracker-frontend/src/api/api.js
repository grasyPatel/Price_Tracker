import axios from "axios";

const API_URL = "http://localhost:5001/api"; // Base URL updated

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Fetch all products
export const fetchProducts = async () => {
    const res = await api.get("/products");  // Using `api` instance
    return res.data;
};

// Fetch a single product by ID
export const fetchProductById = async (id) => {
    const res = await api.get(`/products/${id}`);  // Corrected API path
    return res.data;
};

// Track a new product
export const trackProduct = async (name, url) => {
    const res = await api.post("/track", { name, url });  // Corrected API path
    return res.data;
};
