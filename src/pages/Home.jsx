import { useState } from "react";
import collegesData from "../data/colleges.json";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import CollegeCard from "../components/CollegeCard";

function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");

  const handleCompare = (college) => {
    const compare =
      JSON.parse(localStorage.getItem("compareColleges")) || [];

    const exists = compare.find(
      (item) => item.id === college.id
    );

    if (!exists && compare.length < 3) {
      compare.push(college);
      localStorage.setItem(
        "compareColleges",   // save to browser
        JSON.stringify(compare)
      );
      alert("Added to Compare");
    }
  };

  const filteredColleges = collegesData.filter((college) => {
    const matchSearch = college.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchLocation =
      location === "" || college.location === location;

    const matchRating =
      rating === "" ||
      college.rating >= Number(rating);

    return (
      matchSearch &&
      matchLocation &&
      matchRating
    );
  });

  return (
    <>
      <Navbar />

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Find Your Dream College
          </h1>

          <p className="text-lg">
            Search, Compare and Save Colleges
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="mt-4">
          <FilterBar
            location={location}
            setLocation={setLocation}
            rating={rating}
            setRating={setRating}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredColleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
              onCompare={handleCompare}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;