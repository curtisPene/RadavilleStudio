import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../app/AppStore";
import {
  openNav,
  closeNav,
  setOpenRequest,
  setCloseRequest,
} from "../stores/navSlice";

export const useNavStore = () => {
  const { isOpen, isClosing } = useSelector((state: RootState) => state.nav);

  const dispatch = useDispatch();

  return {
    isOpen,
    isClosing,
    openNav: () => dispatch(openNav()),
    closeNav: () => dispatch(closeNav()),
    setOpenRequest: () => dispatch(setOpenRequest()),
    setCloseRequest: () => dispatch(setCloseRequest()),
  };
};
