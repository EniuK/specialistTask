import React, { useState } from "react";
import SpecialistCard from "./specialistCard";
import { useSelector } from "react-redux";
import { selectSpecialists } from "../redux/specialistsReducer";
import "./main.css";

const Main = () => {
  const allSpecialists = useSelector(selectSpecialists);
  const [favFilter, setFavFilter] = useState(false);
  const [searchText, setSearchText] = useState("");
  const filteredSpecialists = allSpecialists.filter((specialist: any) => {
    const nameIncludesSearchText = specialist.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const isFavMatch = favFilter ? specialist.isFav : true;
    return nameIncludesSearchText && isFavMatch;
  });

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div className="filter-text">
          {favFilter
            ? `Favorite specialists (${filteredSpecialists.length})`
            : "All specialists"}
        </div>
        <div style={{ display: "flex", flexDirection: "row", width: "33%" }}>
          <div
            className={`filter fav-filter ${favFilter ? "active-filter" : ""}`}
            onClick={() => setFavFilter(!favFilter)}
          >
            All favorite
          </div>
          <div
            className={`filter all-filter ${!favFilter ? "active-filter" : ""}`}
            onClick={() => setFavFilter(!favFilter)}
          >
            My specialists
          </div>
        </div>
        <div
          style={{
            width: "33%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            className="input-filter"
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      {filteredSpecialists.map((specialist: any) => (
        <SpecialistCard key={specialist.id} specialist={specialist} />
      ))}
    </div>
  );
};

export default Main;
