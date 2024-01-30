import { FC, ReactNode } from "react";

import { Footer, Header } from "../components/sections";

type NoAuthLayoutProps = {
  children: ReactNode;
}

export const NoAuthLayout: FC<NoAuthLayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
};