import { FC, ReactNode } from "react";

import { Footer, Header } from "../components/sections";

type MainLayoutProps = {
  children: ReactNode;
}
export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
};

