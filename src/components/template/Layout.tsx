import { Outlet } from 'react-router-dom'
import { Footer } from '../molecule/Footer'
import { Header } from '../molecule/Header'

interface Props {

}

export const Layout: React.FC<Props> = () => {
  return (
    <>
      <Header title="Header" />
      <Outlet />
      <Footer title="Footer" />
    </>
  )
}