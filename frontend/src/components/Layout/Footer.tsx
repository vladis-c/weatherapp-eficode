import React from 'react'
import { Container, Toolbar, Typography  } from '@mui/material'

import { colors } from '../../styles/colors'
import { StyledAppBar } from '../UI/MUIComponents'

const Footer = () => {
  return (
    <StyledAppBar
      position="fixed"
      sx={{  top: "auto", bottom: 0, width: "100%" ,color: colors.winter}}
    >
      <Container >
        <Toolbar disableGutters>
          <Typography align="right">
            Vladislav Cherkasheninov 2022.
          </Typography >
        </Toolbar>
      </Container>
    </StyledAppBar>
  )
}

export default Footer