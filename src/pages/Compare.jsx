import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import CompareTable from "../components/CompareTable";

function Compare() {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const compare =
      JSON.parse(
        localStorage.getItem("compareColleges")
      ) || [];

    setColleges(compare);
  }, []);

  const clearCompare = () => {
    localStorage.removeItem("compareColleges");
    setColleges([]);
  };

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">
            Compare Colleges
          </h1>

          <button
            onClick={clearCompare}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Clear
          </button>
        </div>

        <CompareTable colleges={colleges} />
      </div>
    </>
  );
}

export default Compare;