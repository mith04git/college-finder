import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

function Saved() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const colleges =
      JSON.parse(
        localStorage.getItem("savedColleges")
      ) || [];

    setSaved(colleges);
  }, []);

  const removeCollege = (id) => {
    const updated = saved.filter(
      (college) => college.id !== id
    );

    setSaved(updated);

    localStorage.setItem(
      "savedColleges",
      JSON.stringify(updated)
    );
  };

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          Saved Colleges
        </h1>

        {saved.length === 0 ? (
          <p>No saved colleges.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {saved.map((college) => (
              <div
                key={college.id}
                className="bg-white shadow-md rounded-xl p-5"
              >
                <h2 className="text-xl font-bold">
                  {college.name}
                </h2>

                <p>{college.location}</p>

                <p>
                  ⭐ {college.rating}
                </p>

                <button
                  onClick={() =>
                    removeCollege(college.id)
                  }
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Saved;