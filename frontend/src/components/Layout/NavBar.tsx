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

import {
  StyledAppBar,
  StyledDrawer,
  StyledDrawerHeader,
} from '../UI/MUIComponents'
import { PagesNamesEnum } from '../../enums/enums'

import { colors } from '../../styles/colors'
import { MyStylesType, PagesNamesType } from '../../types/types'
import FavIcon from '../UI/FavIcon'
import { useAppSelector } from '../../hooks/redux-hooks'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const { weatherSlice } = useAppSelector((state) => state)
  const { currentLocation, currentLocationData, requestedCityData } =
    weatherSlice

  const cityName =
    requestedCityData.name ||
    currentLocationData.name||
    currentLocation.city ||
    'Dark Weather App'

  const pages: PagesNamesType[] = [
    {
      title: PagesNamesEnum.CURRENT,
      icon: <LocationOnIcon sx={{ color: colors.black }} />,
      link: '/',
    },
    {
      title: PagesNamesEnum.FIND,
      icon: <EditLocationIcon sx={{ color: colors.black }} />,
      link: '/find',
    },
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <StyledAppBar position="fixed" open={open}>
        <Toolbar sx={styles.toolbar}>
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
            {cityName}
          </Typography>
          <Box sx={{ transform: `scale(150%)` }}>
            <FavIcon />
          </Box>
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

const styles: MyStylesType = {
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

export default NavBar
