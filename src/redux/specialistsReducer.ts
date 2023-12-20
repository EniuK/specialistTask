// specialistsReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Specialist } from "./types";

interface SpecialistsState {
  specialists: Specialist[];
}

const initialState: SpecialistsState = {
  specialists: [], // Tutaj umieść swoją listę 4000 specjalistów
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

export default specialistsSlice.reducer;
