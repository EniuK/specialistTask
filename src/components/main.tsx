import SpecialistCard from "./specialistCard";

const Main = () => {
  const helpData = [
    {
      id: 1,
      name: "Abraham Thompson",
      specialty: "dentist",
      rating: 4,
      imgsrc: "./specialist1",
      isFav: false,
      numOfRatings: 79,
    },
    {
      id: 2,
      name: "Efren Dickinson",
      specialty: "dentist",
      rating: 4,
      imgsrc: "./specialist1",
      isFav: false,
      numOfRatings: 54,
    },
    {
      id: 3,
      name: "Stephania Boyle",
      specialty: "oncologist",
      rating: 3,
      imgsrc: "./specialist3",
      isFav: false,
      numOfRatings: 23,
    },
  ];
  return (
    <div style={{ width: "100vw" }}>
      {helpData.map((e: any) => {
        return <SpecialistCard specialist={e} />;
      })}
    </div>
  );
};

export default Main;
