import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages";

type Props = {
  children: React.ReactNode;
}

export const RouteNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}