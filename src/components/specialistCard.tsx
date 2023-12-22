import "./specialistcard.css";

import { useDispatch } from "react-redux";
import { toggleFavorite, rateSpecialist } from "../redux/specialistsReducer";
import { useState } from "react";
import { Specialist } from "../redux/types";

const SpecialistCard: React.FC<{ specialist: Specialist }> = ({
  specialist,
}) => {
  const [grade, setGrade] = useState(true);
  const [hovered, setHovered] = useState({
    bell: false,
    calendar: false,
    message: false,
  });

  const [onMoreHover, setOnMoreHover] = useState(false);

  const handleMouseOver = (icon: string) => {
    setHovered((prevHovered) => ({ ...prevHovered, [icon]: true }));
  };

  const handleMouseOut = (icon: string) => {
    setHovered((prevHovered) => ({ ...prevHovered, [icon]: false }));
  };
  const arr = [1, 2, 3, 4, 5];
  const data = specialist;
  const dispatch = useDispatch();

  const handleHeartClick = () => {
    console.log(data.isFav);
    dispatch(toggleFavorite(specialist.id));
  };

  const handleStarClick = (newRte: number) => {
    if (grade) {
      dispatch(rateSpecialist({ id: specialist.id, rating: newRte }));
    }
    setGrade(false);
  };

  const nameParts = data.name.split(" ");
  const initials = nameParts
    .map((part: string) => part.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <div className="card-wrapper">
      <div className="specialist-card" key={specialist.id}>
        <div className="card-header">
          <div
            className="more-img"
            onMouseOver={() => setOnMoreHover(true)}
            onMouseOut={() => setOnMoreHover(false)}
          >
            <img
              src={onMoreHover ? "./more-blue.png" : "./more.png"}
              alt="more"
            />
          </div>
          <div className="heart-img">
            {specialist.isFav ? (
              <img src="./heart.png" alt="heart" onClick={handleHeartClick} />
            ) : (
              <img
                style={{ width: "26px", height: "23px" }}
                src="./hearth.png"
                alt="heart"
                onClick={handleHeartClick}
              />
            )}
          </div>
        </div>
        <div className="image-wrapper">
          <div>
            {data.imgsrc === "./specialist2.png" ? (
              <img src="./specialist2.png" alt="specialist" />
            ) : (
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#ffaf14",
                  borderRadius: "50%",
                  display: "flex",
                  color: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "25px",
                  fontWeight: 600,
                }}
              >
                {initials}
              </div>
            )}
          </div>
        </div>
        <div className="name-specialization-wrapper">
          <div className="specialist-name">{data.name}</div>
          <div className="specialization">{data.specialty}</div>
        </div>
        <div className="icons-wrapper">
          <div
            className="icon-holder"
            onMouseOver={() => handleMouseOver("bell")}
            onMouseOut={() => handleMouseOut("bell")}
          >
            <div className="image-container">
              <img
                src={hovered.bell ? "./bell-hover.png" : "./bell.png"}
                alt="bell"
                className="icon-image"
              />
              <div
                style={{ width: "103px", height: "3px", marginTop: "20px" }}
                className={hovered.bell ? "bell-hovered" : "unhovered"}
              />
            </div>
          </div>
          <div
            className="icon-holder"
            onMouseOver={() => handleMouseOver("calendar")}
            onMouseOut={() => handleMouseOut("calendar")}
          >
            <div className="image-container">
              <img
                src={
                  hovered.calendar ? "./calendar-hover.png" : "./calendar.png"
                }
                alt="calendar"
                className="icon-image"
              />
              <div
                style={{ width: "103px", height: "3px", marginTop: "20px" }}
                className={hovered.calendar ? "calendar-hovered" : "unhovered"}
              />
            </div>
          </div>
          <div
            className="icon-holder"
            onMouseOver={() => handleMouseOver("message")}
            onMouseOut={() => handleMouseOut("message")}
          >
            <div className="image-container">
              <img
                src={hovered.message ? "./message-hover.png" : "./message.png"}
                alt="message"
                className="icon-image"
              />
              <div
                style={{ width: "103px", height: "3px", marginTop: "20px" }}
                className={hovered.message ? "message-hovered" : "unhovered"}
              />
            </div>
          </div>
        </div>
        <div className="stars-rating-wrapper">
          <div className="stars-rating">
            {arr.map((e: number) => {
              if (e <= data.rating) {
                return (
                  <img
                    src="./star-blue-kopia.png"
                    alt="bStar"
                    onClick={() => handleStarClick(e)}
                    style={{ marginRight: "9px" }}
                  />
                );
              } else {
                return (
                  <img
                    src="./star-gray.png"
                    alt="gStar"
                    onClick={() => handleStarClick(e)}
                    style={{ marginRight: "9px" }}
                  />
                );
              }
            })}
          </div>
          <div className="average-rating">
            <div className="avrg">{data.rating}</div>
            <div className="num-of-votes">
              {"("}
              {data.numOfRatings}
              {")"}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className={"footer-child footer-profil"}>PROFIL</div>
          <div className={"footer-child footer-book"}>BOOK A VISIT</div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistCard;
