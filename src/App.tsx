import { useState } from "react";
import { Route } from "react-router-dom";

import { RouteNotFound } from "./routes/route-not-found.route";
import { PrivateRoutes } from "./routes/private-routes";

import { PUBLIC_ROUTES } from "./routes";
import { Login } from "./pages";

import "./App.css";

function App() {
  const [isUserAuth, setIsUserAuth] = useState<boolean>(true)
  return (
    <RouteNotFound>
      {!isUserAuth && <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />}
      {isUserAuth && <PrivateRoutes />}
    </RouteNotFound>
  )
}

export default App;
