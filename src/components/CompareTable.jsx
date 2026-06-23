function CompareTable({ colleges }) {
  if (colleges.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No colleges selected.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-md">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-4">Feature</th>

            {colleges.map((college) => (
              <th
                key={college.id}
                className="p-4"
              >
                {college.name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-4 font-semibold">
              Location
            </td>

            {colleges.map((college) => (
              <td
                key={college.id}
                className="p-4"
              >
                {college.location}
              </td>
            ))}
          </tr>

          <tr className="border-b">
            <td className="p-4 font-semibold">
              Fees
            </td>

            {colleges.map((college) => (
              <td
                key={college.id}
                className="p-4"
              >
                ₹{college.fees}
              </td>
            ))}
          </tr>

          <tr className="border-b">
            <td className="p-4 font-semibold">
              Rating
            </td>

            {colleges.map((college) => (
              <td
                key={college.id}
                className="p-4"
              >
                ⭐ {college.rating}
              </td>
            ))}
          </tr>

          <tr>
            <td className="p-4 font-semibold">
              Avg Package
            </td>

            {colleges.map((college) => (
              <td
                key={college.id}
                className="p-4"
              >
                {college.averagePackage}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompareTable;