import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import collegesData from "../data/colleges.json";

function CollegeDetail() {
  const { id } = useParams();

  const college = collegesData.find(
    (c) => c.id === Number(id)
  );

  if (!college) {
    return <h2>College Not Found</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-4xl font-bold mb-2">
            {college.name}
          </h1>

          <p className="text-gray-600 mb-4">
            📍 {college.location}
          </p>

          <p className="mb-4">
            ⭐ {college.rating}
          </p>

          <hr className="my-6" />

          <h2 className="text-2xl font-semibold mb-3">
            Overview
          </h2>

          <p className="mb-6">
            {college.overview}
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            Courses
          </h2>

          <ul className="list-disc pl-5 mb-6">
            {college.courses.map((course) => (
              <li key={course}>
                {course}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-3">
            Placements
          </h2>

          <p>
            Average Package:
            <strong>
              {" "}
              {college.averagePackage}
            </strong>
          </p>

          <p>
            Highest Package:
            <strong>
              {" "}
              {college.highestPackage}
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default CollegeDetail;