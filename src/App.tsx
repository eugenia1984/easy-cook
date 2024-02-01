import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";
import { PrivateRoutes } from "./routes/private-routes";

import { Loader } from './components/ui';

import "./App.css";

const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const Recipe = lazy(() => import('./pages/Recipe'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <PrivateRoutes />
            </Suspense>
          }
        >
          <Route index path={PRIVATE_ROUTES.HOME} element={<Home />} />
          <Route path={PRIVATE_ROUTES.SEARCH} element={<Search />} />
          <Route path={PRIVATE_ROUTES.HOME + PRIVATE_ROUTES.RECIPE_BY_ID} element={<Recipe />} />
          <Route path={PRIVATE_ROUTES.CONTACT} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
