import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/api";
import PriceHistoryChart from "../components/PriceHistoryChart";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>Current Price: ${product.currentPrice}</p>
      <PriceHistoryChart priceHistory={product.priceHistory} />
    </div>
  );
}
