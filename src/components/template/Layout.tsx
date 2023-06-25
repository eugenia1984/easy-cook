import { Outlet } from 'react-router-dom'
import { Footer } from '../molecule/footer/Footer'
import { Header } from '../molecule/header/Header'

interface Props {

}

export const Layout: React.FC<Props> = () => {
  return (
    <>
      <Header title="EasyCook" />
      <Outlet />
      <Footer text="All rights reserved" />
    </>
  )
}