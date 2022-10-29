import React from 'react'
import {
  TextField,
  InputAdornment,
  Button,
  Typography,
  IconButton,
} from '@mui/material'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import { isDesktop } from 'react-device-detect'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '../UI/MUIComponents'
import type { MyStylesType } from '../../types/types'
import { colors } from '../../styles/colors'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { setSearchLocationInput } from '../../redux/slices/historySlice'

const TextSearch = () => {
  const dispatch = useAppDispatch()
  const { historySlice } = useAppSelector((state) => state)
  const { searchLocationInput } = historySlice

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchLocationInput(e.target.value))
  }

  return (
    <Accordion expanded={Boolean(searchLocationInput)}>
      <AccordionSummary>
        <ClickAwayListener
          onClickAway={() => dispatch(setSearchLocationInput(''))}
        >
          <TextField
            value={searchLocationInput}
            variant="standard"
            size="small"
            autoComplete="off"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => dispatch(setSearchLocationInput(''))}
                  >
                    <ClearIcon
                      sx={{
                        marginLeft: -1,
                        mb: 1,
                      }}
                    />
                  </IconButton>
                  <Button
                    variant="outlined"
                    sx={{
                      width: { md: 30, sm: 20 },
                      height: { md: 30, sm: 20 },
                      color: colors.grey,
                      backgroundColor: colors.winter,
                      mb: 1,
                      boxShadow: 0,
                      borderColor: colors.grey,
                      borderWidth: 0.5,
                    }}
                  >
                    Search
                  </Button>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{
                      marginBottom: 1,
                      width: { md: 30, sm: 20 },
                      height: { md: 30, sm: 20 },
                    }}
                  />
                </InputAdornment>
              ),
              style: {
                fontSize: isDesktop ? 16 : 12,
              },
              disableUnderline: true,
            }}
            sx={{
              width: '100%',
              height: { md: 40, sm: 30 },
              backgroundColor: colors.winter,
              borderRadius: 4,
              padding: 1,
            }}
            placeholder="Find location..."
            onChange={handleSearch}
          />
        </ClickAwayListener>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

const styles: MyStylesType = {}

export default TextSearch
