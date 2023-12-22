// redux/specialistsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import special from "../modules/specialistsData.json";

interface Specialist {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  isFav: boolean;
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
      if (specialist) {
        specialist.rating = (specialist.rating + rating) / 2;
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
  },
});

export const { rateSpecialist, toggleFavorite } = specialistsSlice.actions;

export const selectSpecialists = (state: any) => state.specialists.specialists;

export default specialistsSlice.reducer;
