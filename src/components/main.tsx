import { useState, useMemo } from "react";
import SpecialistCard from "./specialistCard";
import { useSelector } from "react-redux";
import { selectSpecialists } from "../redux/specialistsReducer";
import "./main.css";
import { Specialist } from "../redux/types";

const Main: React.FC = () => {
  const allSpecialists = useSelector(selectSpecialists);
  const [favFilter, setFavFilter] = useState(false);
  const [searchText, setSearchText] = useState("");

  const filteredSpecialists = useMemo(() => {
    return allSpecialists.filter((specialist: Specialist) => {
      const nameIncludesSearchText = specialist.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const isFavMatch = favFilter ? specialist.isFav : true;
      return nameIncludesSearchText && isFavMatch;
    });
  }, [allSpecialists, favFilter, searchText]);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: "50px",
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
            style={{
              background: "url('./loupe.png') no-repeat 10px center",
              backgroundSize: "24px 24px",
              paddingLeft: "40px",
            }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      {filteredSpecialists.map((specialist: Specialist) => (
        <SpecialistCard key={specialist.id} specialist={specialist} />
      ))}
    </div>
  );
};

export default Main;
