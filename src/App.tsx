import { HashRouter, Routes, Route } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './router/routes'
import { Layout } from './components/template/Layout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Contact } from './pages/Contact'
import { Search } from './pages/Search'
import { Favorites } from './pages/Favorites'
import { Recipe } from './pages/Recipe'
import { NotFound } from './pages/NotFound'
import './App.css'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route element={ <Layout /> }>
          <Route path={ publicRoutes.HOME } element={ <Home title="Home" /> } />
          <Route path={ publicRoutes.LOGIN} element={ <Login title="Login" /> } />
          <Route path={ publicRoutes.CONTACT } element={ <Contact title="Contact" /> } />
          <Route path={ privateRoutes.SEARCH } element={ <Search title="Search" /> } />
          <Route path={ privateRoutes.RECIPE_BY_ID } element={ <Recipe title="Recipe" /> } />
          <Route path={ privateRoutes.FAVORITES } element={ <Favorites title="Favorites" /> } />
          <Route path={ publicRoutes.NOT_FOUND} element={ <NotFound title="Not Found" /> } />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
