import { createSlice } from "@reduxjs/toolkit";

export interface INavState {
  navIsOpen: boolean;
}

const initialState: INavState = {
  navIsOpen: false,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    openNav: (state) => {
      state.navIsOpen = true;
    },
    closeNav: (state) => {
      state.navIsOpen = false;
    },
  },
});

export const { openNav, closeNav } = navSlice.actions;
export default navSlice.reducer;
