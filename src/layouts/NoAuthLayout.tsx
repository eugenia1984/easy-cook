import { FC } from "react";
import { Footer, Header } from "../components/sections";

type NoAuthLayoutProps = {
  children: React.ReactNode
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