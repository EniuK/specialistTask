import React, { useState } from "react";
import SpecialistCard from "./specialistCard";
import { useSelector } from "react-redux";
import { selectSpecialists } from "../redux/specialistsReducer";
import "./main.css";
const Main = () => {
  const specialists = useSelector(selectSpecialists);
  const [favFilter, setFavFilter] = useState(false);
  const [filter, setFilter] = useState("");
  const handleChange = (e: any) => {
    setFilter(e);
  };
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
          justifyContent: "space-between",
        }}
      >
        <div>{favFilter ? "Favorite specialists (4)" : "Specialists "}</div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            className={`filter fav-filter ${favFilter ? "active-filter" : ""}`}
            style={{
              backgroundColor: favFilter ? "#3540ff" : "transparent",
              color: favFilter ? "white" : "black",
            }}
            onClick={() => setFavFilter(true)}
          >
            All favorite
          </div>
          <div
            className={`filter all-filter ${!favFilter ? "active-filter" : ""}`}
            style={{
              backgroundColor: !favFilter ? "#3540ff" : "transparent",
              color: !favFilter ? "white" : "black",
            }}
            onClick={() => setFavFilter(false)}
          >
            My specialists
          </div>
        </div>
        <div>
          <input type="text" onChange={(e: any) => handleChange(e)} />
        </div>
      </div>
      {specialists.map((specialist: any) => (
        <SpecialistCard key={specialist.id} specialist={specialist} />
      ))}
    </div>
  );
};

export default Main;
