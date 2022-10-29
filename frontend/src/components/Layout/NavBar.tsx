import { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EditLocationIcon from '@mui/icons-material/EditLocation'
import StarIcon from '@mui/icons-material/Star'
import {
  StyledAppBar,
  StyledDrawer,
  StyledDrawerHeader,
} from '../UI/MUIComponents'
import { PagesNamesEnum } from '../../enums/enums'

import { colors } from '../../styles/colors'
import { PagesNamesType } from '../../types/types'


const NavBar = () => {
  const [open, setOpen] = useState(false)

  const pages: PagesNamesType[] = [
    {
      title: PagesNamesEnum.CURRENT,
      icon: <LocationOnIcon sx={{ color: colors.black}} />,
      link: '/',
    },
    {
      title: PagesNamesEnum.FIND,
      icon: <EditLocationIcon sx={{ color: colors.black }} />,
      link: '/find',
    },
    {
      title: PagesNamesEnum.FAVOURITE,
      icon: <StarIcon sx={{ color: colors.black }} />,
      link: '/favourites',
    },
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <StyledAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setOpen(true)}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: colors.winter }}
          >
            Dark Weather App
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer variant="permanent" open={open}>
        <StyledDrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            <MenuIcon sx={{ color: colors.winter }} />
          </IconButton>
        </StyledDrawerHeader>
        <Divider />
        <List>
          {pages.map(({ title, icon, link }) => (
            <Link key={title} to={link}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </StyledDrawer>
    </Box>
  )
}
export default NavBar
