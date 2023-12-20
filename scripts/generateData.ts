import * as fs from "fs";
import casual from "casual";

interface Specialist {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  imgsrc: string;
  isFav: boolean;
  numOfRatings: number;
}

const generateSpecialists = (count: number): Specialist[] => {
  const specialists: Specialist[] = [];
  for (let i = 1; i <= count; i++) {
    // randomize rating
    const rating = casual.integer(0, 5);

    // randomize img
    const rn = casual.integer(0, 3);
    const imgsrc = `./specialist${rn}`;

    // randomize speciality
    const specialities = ["optican", "dentist", "surgeon", "oncologist"];
    const speciality = specialities[rn];

    // randomize number of ratings
    const rando = casual.integer(0, 100);

    const specialist: Specialist = {
      id: i,
      name: casual.first_name + " " + casual.last_name,
      specialty: speciality as string,
      rating: rating as number,
      imgsrc: imgsrc as string,
      isFav: false,
      numOfRatings: rando as number,
    };
    specialists.push(specialist);
  }
  return specialists;
};

const saveDataToFile = (data: any, filename: string): void => {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
};

const specialistsData = generateSpecialists(4000);
saveDataToFile(specialistsData, "specialistsData.json");
