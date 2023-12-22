import "./specialistcard.css";

import { useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/specialistsReducer";
import { useEffect } from "react";

const SpecialistCard = (specialist: any) => {
  const arr = [1, 2, 3, 4, 5];
  const data = specialist.specialist;
  const dispatch = useDispatch();

  useEffect(() => {}, [specialist.specialist.isFav]);

  const handleHeartClick = () => {
    console.log(data.isFav);
    dispatch(toggleFavorite(specialist.specialist.id));
  };

  const nameParts = data.name.split(" ");
  const initials = nameParts
    .map((part: any) => part.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <div className="card-wrapper">
      <div className="specialist-card" key={specialist.id}>
        <div className="card-header">
          <div className="more-img">
            <img src="./more.png" alt="more" />
          </div>
          <div className="heart-img">
            {specialist.specialist.isFav ? (
              <img src="./heart.png" alt="heart" onClick={handleHeartClick} />
            ) : (
              <img
                src="./hearth.png"
                alt="heart"
                style={{ width: "26px", height: "23px" }}
                onClick={handleHeartClick}
              />
            )}
          </div>
        </div>
        <div className="image-wrapper">
          <div>
            {data.imgsrc == "./specialist2.png" ? (
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
          <div>
            <img src="./bell.png" alt="bell" />
          </div>
          <div>
            <img src="calendar.png" alt="calendar" />
          </div>
          <div>
            <img src="message.png" alt="message" />
          </div>
        </div>
        <div className="stars-rating-wrapper">
          <div className="stars-rating">
            {arr.map((e: any) => {
              if (e > data.rating) {
                return <img src="./star-gray.png" alt="gStar" />;
              } else {
                return <img src="./star-blue-kopia.png" alt="bStar" />;
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
