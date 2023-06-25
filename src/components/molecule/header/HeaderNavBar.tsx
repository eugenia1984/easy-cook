import React, { Dispatch } from 'react'
import { publicRoutes, privateRoutes } from '../../../router/routes'
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

import { Pages } from './Header.d'
import './HeaderNavBar.styles.css'

interface PropsHeaderNavBar {
  title: string
  isLoged: boolean
  setIsLoged: Dispatch<React.SetStateAction<boolean>>
}

const pages: Pages = [
  { text: 'Contact', url: publicRoutes.CONTACT },
  { text: 'Login', url: publicRoutes.LOGIN }
]

const settings: Pages = [
  { text: 'Recipes', url: privateRoutes.SEARCH },
  { text: 'Favorites', url: privateRoutes.FAVORITES },
  { text: 'Contact', url: publicRoutes.CONTACT }
]

export const HeaderNavBar: React.FC<PropsHeaderNavBar> = ({ title, isLoged, setIsLoged }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget)

  const handleCloseNavMenu = () => setAnchorElNav(null)

  const handleCloseUserMenu = () => setAnchorElUser(null)

  const handleLogOut = () => { setIsLoged(false) }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={ {
              mr: 2,
              display: { xs: 'flex' },
              fontWeight: 800,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            } }
          >
            { title }
          </Typography>
          { isLoged ?
            (
              <Box sx={ { flexGrow: 0 } }>
                <Tooltip title="Open settings">
                  <IconButton onClick={ handleOpenUserMenu } sx={ { p: 0 } }>
                    <Avatar alt="Remy Sharp" src="https://img.icons8.com/ios-filled/50/user-female-circle.png" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={ { mt: '45px' } }
                  id="menu-appbar"
                  anchorEl={ anchorElUser }
                  anchorOrigin={ {
                    vertical: 'top',
                    horizontal: 'right',
                  } }
                  keepMounted
                  transformOrigin={ {
                    vertical: 'top',
                    horizontal: 'right',
                  } }
                  open={ Boolean(anchorElUser) }
                  onClose={ handleCloseUserMenu }
                >
                  { settings.map((setting) => (
                    <MenuItem
                      key={ setting.text }
                      onClick={ handleCloseUserMenu }
                    >
                      <Typography textAlign="center">
                        <Link to={ setting.url } className="link-settings">{ setting.text }</Link>
                      </Typography>
                    </MenuItem>
                  )) }
                  <MenuItem onClick={ handleLogOut }>
                    <Typography textAlign="center">
                      <Link to={ publicRoutes.HOME } className="link-settings">
                        Logout
                      </Link>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )
            :
            (
              <>
                <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={ handleOpenNavMenu }
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={ anchorElNav }
                    anchorOrigin={ {
                      vertical: 'bottom',
                      horizontal: 'left',
                    } }
                    keepMounted
                    transformOrigin={ {
                      vertical: 'top',
                      horizontal: 'left',
                    } }
                    open={ Boolean(anchorElNav) }
                    onClose={ handleCloseNavMenu }
                    sx={ {
                      display: { xs: 'block', md: 'none' },
                    } }
                  >
                    { pages.map((page) => (
                      <MenuItem key={ page.text } onClick={ handleCloseNavMenu }>
                        <Typography textAlign="center">
                          <Link to={ page.url } className="link-pages">{ page.text }</Link>
                        </Typography>
                      </MenuItem>
                    )) }
                  </Menu>
                </Box>
                <Box sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>
                  { pages.map((page) => (
                    <Button
                      key={ page.text }
                      onClick={ handleCloseNavMenu }
                      sx={ { my: 2, color: 'white', display: 'block' } }
                      className="btn-link-pages-large"
                    >
                      <Link to={ page.url } className="link-pages-large">{ page.text }</Link>
                    </Button>
                  )) }
                </Box>
              </>

            )
          }
        </Toolbar>
      </Container>
    </AppBar>
  )
}