// redux/specialistsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import special from "../modules/specialistsData.json";

interface Specialist {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  isFav: boolean;
  numOfRatings: number;
}

interface SpecialistsState {
  specialists: Specialist[];
}

const initialState: SpecialistsState = {
  specialists: special,
};

const specialistsSlice = createSlice({
  name: "specialists",
  initialState,
  reducers: {
    rateSpecialist: (
      state,
      action: PayloadAction<{ id: number; rating: number }>
    ) => {
      const { id, rating } = action.payload;
      const specialist = state.specialists.find((sp) => sp.id === id);

      const help = () => {
        let avrg = 0;
        if (specialist) {
          avrg = specialist.rating * specialist.numOfRatings;
        }

        if (specialist) {
          avrg = (avrg + rating) / (specialist.numOfRatings + 1);
        }
        avrg = parseFloat(avrg.toFixed(1));
        return avrg;
      };

      if (specialist) {
        specialist.rating = help();
        specialist.numOfRatings = specialist.numOfRatings + 1;
      }
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const specialist = state.specialists.find(
        (sp) => sp.id === action.payload
      );
      if (specialist) {
        specialist.isFav = !specialist.isFav;
      }
    },
    numOfRatings: (
      state,
      action: PayloadAction<{ id: number; rating: number }>
    ) => {
      const specialist = state.specialists.find(
        (sp) => sp.id === action.payload.id
      );
      if (specialist) {
        specialist.isFav = !specialist.isFav;
      }
    },
  },
});

export const { rateSpecialist, toggleFavorite } = specialistsSlice.actions;

export const selectSpecialists = (state: any) => state.specialists.specialists;

export default specialistsSlice.reducer;
