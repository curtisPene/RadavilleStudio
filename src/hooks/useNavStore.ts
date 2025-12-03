import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../app/AppStore";
import { openNav, closeNav } from "../stores/navSlice";

export const useNavStore = () => {
  const { navIsOpen } = useSelector((state: RootState) => state.nav);

  const dispatch = useDispatch();

  return {
    navIsOpen,
    openNav: () => dispatch(openNav()),
    closeNav: () => dispatch(closeNav()),
  };
};
