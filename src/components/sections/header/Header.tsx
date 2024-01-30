import { useUserStore } from "../../../store";
import { AppHeader, Logo } from "./Header.Styles";

export const Header = () => {
  const { isAuth } = useUserStore();

  return (
    <AppHeader>
      <Logo>EasyCook</Logo>
    </AppHeader>
  )
};
