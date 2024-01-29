import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";
import { Contact, Home, Login, NotFound, Recipe, Search } from "./pages";

import "./App.css";

function App() {
  const [isUserAuth, setIsUserAuth] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Routes>
        {
          !isUserAuth ?
            <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
            :
            <>
              <Route path={PRIVATE_ROUTES.HOME} element={<Home />} />
              <Route path={PRIVATE_ROUTES.SEARCH} element={<Search />} />
              <Route path={PRIVATE_ROUTES.RECIPE_BY_ID} element={<Recipe />} />
              <Route path={PRIVATE_ROUTES.CONTACT} element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </>
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App;
