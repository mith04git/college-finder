import { Link } from "react-router-dom";

function CollegeCard({ college, onCompare }) {
  const saveCollege = () => {
    const saved =
      JSON.parse(localStorage.getItem("savedColleges")) || [];

    const exists = saved.find(
      (item) => item.id === college.id
    );

    if (!exists) {
      saved.push(college);
      localStorage.setItem(
        "savedColleges",
        JSON.stringify(saved)
      );
    }

    alert("College Saved!");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">
        {college.name}
      </h2>

      <p className="text-gray-600 mb-2">
        📍 {college.location}
      </p>

      <p className="mb-1">
        💰 Fees: ₹{college.fees}
      </p>

      <p className="mb-4">
        ⭐ Rating: {college.rating}
      </p>

      <div className="flex gap-2 flex-wrap">
        <Link
          to={`/college/${college.id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Details
        </Link>

        <button
          onClick={() => onCompare(college)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Compare
        </button>

        <button
          onClick={saveCollege}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default CollegeCard;