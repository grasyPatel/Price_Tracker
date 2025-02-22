import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Price Tracker</Link>
        <Link to="/track" className="bg-white text-blue-600 px-3 py-1 rounded">Track Product</Link>
      </div>
    </nav>
  );
}
