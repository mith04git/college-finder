function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search colleges..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default SearchBar;