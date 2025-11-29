import { createSlice } from "@reduxjs/toolkit";

interface NavState {
  isOpen: boolean;
  isOpening: boolean;
  isClosing: boolean;
}

const initialState: NavState = {
  isOpen: false,
  isOpening: false,
  isClosing: false,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOpenRequest: (state) => {
      state.isOpening = true;
    },
    setCloseRequest: (state) => {
      state.isClosing = true;
    },
    openNav: (state) => {
      state.isOpening = false;
      state.isOpen = true;
    },
    closeNav: (state) => {
      state.isClosing = false;
      state.isOpen = false;
    },
  },
});

export const { openNav, closeNav, setOpenRequest, setCloseRequest } =
  navSlice.actions;
export default navSlice.reducer;
