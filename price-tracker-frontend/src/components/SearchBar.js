import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center border p-2 rounded">
      <input
        type="text"
        placeholder="Search for a product..."
        className="p-2 w-full outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => onSearch(query)} className="bg-blue-600 text-white px-3 py-1 rounded">Search</button>
    </div>
  );
}
