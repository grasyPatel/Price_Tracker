import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">Current Price: ${product.currentPrice}</p>
      <Link to={`/product/${product._id}`} className="text-blue-500">View Details</Link>
    </div>
  );
}
