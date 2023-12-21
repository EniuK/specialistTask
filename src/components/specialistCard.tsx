import datas from "../modules/specialistsData.json";
import "./specialistcard.css";
import { Specialist } from "../redux/types";
import { useEffect, useState } from "react";

const SpecialistCard = (specialist: Specialist) => {
  //   const [bstars, setBstars] = useState();
  //   const [gstars, setGstars] = useState();
  const arr = [1, 2, 3, 4, 5];
  const data = specialist.specialist;

  useEffect(() => {}, [data]);

  return (
    <div className="card-wrapper">
      <div className="specialist-card">
        <div className="card-header">
          <div className="more-img">
            <img src="./more.png" alt="more" />
          </div>
          <div className="heart-img">
            {data.isFav ? (
              <img src="./heart.png" alt="heart" />
            ) : (
              <img
                src="./hearth.png"
                alt="heart"
                style={{ width: "26px", height: "23px" }}
              />
            )}
          </div>
        </div>
        <div className="image-wrapper">
          <div>
            <img src="./specialist2.png" alt="specialist" />
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
              //   console.log(data.rating);
              //   console.log(data + "hejka");
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
