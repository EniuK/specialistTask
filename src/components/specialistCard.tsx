import datas from "../modules/specialistsData.json";
import "./specialistcard.css";
const SpecialistCard = () => {
  return (
    <div className="card-wrapper">
      <div className="specialist-card">
        <div className="card-header">
          <div className="more-img">
            <img src="./more.png" alt="more" />
          </div>
          <div className="heart-img">
            <img src="./heart.png" alt="heart" />
          </div>
        </div>
        <div className="image-wrapper">
          <div>
            <img src="./specialist2.png" alt="specialist" />
          </div>
        </div>
        <div className="name-specialization-wrapper">
          <div className="specialist-name">erica morickson</div>
          <div className="specialization">optican</div>
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
        <div className="stars-rating-wrapper"></div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
};

export default SpecialistCard;
