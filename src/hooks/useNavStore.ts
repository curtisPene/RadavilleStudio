import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/AppStore';
import { openNav, closeNav, toggleNav } from '../stores/navSlice';

export const useNavStore = () => {
  const isOpen = useSelector((state: RootState) => state.nav.isOpen);
  const dispatch = useDispatch();

  return {
    isOpen,
    openNav: () => dispatch(openNav()),
    closeNav: () => dispatch(closeNav()),
    toggleNav: () => dispatch(toggleNav()),
  };
};
