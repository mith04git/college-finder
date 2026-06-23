import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          CollegeFinder
        </Link>

        <div className="flex gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/compare"
            className="text-gray-700 hover:text-blue-600"
          >
            Compare
          </Link>

          <Link
            to="/saved"
            className="text-gray-700 hover:text-blue-600"
          >
            Saved
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;