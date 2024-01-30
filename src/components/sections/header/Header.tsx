import { useUserStore } from "../../../store";
import { AppHeader } from "./Header.Styles";

export const Header = () => {
  const { isAuth } = useUserStore();

  return <AppHeader>Header</AppHeader>;
};
