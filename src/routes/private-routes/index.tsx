import { Route } from "react-router-dom";
import { PRIVATE_ROUTES } from "..";
import { Contact, Home, Recipe, Search } from "../../pages";


export const PrivateRoutes = () => {
  return (
    <>
      <Route path={PRIVATE_ROUTES.HOME} element={<Home />} />
      <Route path={PRIVATE_ROUTES.SEARCH} element={<Search />} />
      <Route path={PRIVATE_ROUTES.RECIPE_BY_ID} element={<Recipe />} />
      <Route path={PRIVATE_ROUTES.CONTACT} element={<Contact />} />
    </>
  )
}