import { PUBLIC_ROUTES } from "..";
import { Outlet, Navigate } from "react-router-dom";

import { useUserStore } from "../../store";

export const PrivateRoutes = () => {
  const { isAuth } = useUserStore();

  console.log('isAuth inside PrivateRoutes', isAuth)

  if (!isAuth) {
    return <Navigate to={PUBLIC_ROUTES.LOGIN} />
  }

  return (
    <Outlet />
  )
}