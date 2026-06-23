function FilterBar({
  location,
  setLocation,
  rating,
  setRating,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-3 border rounded-lg"
      >
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="p-3 border rounded-lg"
      >
        <option value="">All Ratings</option>
        <option value="4.5">4.5+</option>
        <option value="4.7">4.7+</option>
        <option value="4.8">4.8+</option>
      </select>
    </div>
  );
}

export default FilterBar;