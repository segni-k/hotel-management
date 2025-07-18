"use client";

type SearchProps = {
  query: string;
  setQuery: (value: string) => void;
};

export default function SearchComponent({ query, setQuery }: SearchProps) {
  return (
    <div className="w-full max-w-4xl px-4 py-6">
      <input
        type="text"
        placeholder="Search for rooms, features, amenities..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-lg dark:text-gray-400"
      />
    </div>
  );
}
