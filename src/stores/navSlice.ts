import { createSlice } from "@reduxjs/toolkit";

interface NavState {
  isOpen: boolean;
}

const initialState: NavState = {
  isOpen: false,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    openNav: (state) => {
      state.isOpen = true;
    },
    closeNav: (state) => {
      state.isOpen = false;
    },
    toggleNav: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openNav, closeNav, toggleNav } = navSlice.actions;
export default navSlice.reducer;
