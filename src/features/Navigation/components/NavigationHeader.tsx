import { WordMark } from "@/components/header/WordMark";
import { setCloseRequest } from "@/stores/navSlice";
import { XIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";

export const NavigationHeader = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div
      data-navigation-header
      className="flex flex-row items-center justify-between"
    >
      <WordMark fill="white" />
      <button
        onClick={() => {
          navigate(pathname);
          dispatch(setCloseRequest());
        }}
      >
        <XIcon stroke="white" />
      </button>
    </div>
  );
};
