import React, { useEffect, useState } from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import { isDesktop } from 'react-device-detect'
import { Accordion, AccordionSummary } from '../UI/MUIComponents'
import type { MyStylesType } from '../../types/types'
import { colors } from '../../styles/colors'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { setSearchLocationInput } from '../../redux/slices/historySlice'
import { fetchWeatherCityName } from '../../redux/slices/weatherSlice'
import CitiesSearchList from './CitiesSearchList'

const TextSearch = () => {
  const [focused, setFocused] = useState(false)
  const dispatch = useAppDispatch()
  const { historySlice, weatherSlice } = useAppSelector((state) => state)
  const { searchLocationInput } = historySlice
  const { loading } = weatherSlice

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchLocationInput(e.target.value))
  }

  useEffect(() => {
    if (!focused) {
      dispatch(setSearchLocationInput(''))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused])

  return (
    <Accordion expanded={focused}>
      <AccordionSummary>
        <TextField
          onFocus={() => setFocused(true)}
          value={searchLocationInput}
          variant="standard"
          size="small"
          autoComplete="off"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setFocused(false)}>
                  <ClearIcon sx={styles.clearIcon} />
                </IconButton>
                <LoadingButton
                  loading={loading}
                  variant="outlined"
                  sx={styles.loadingButton}
                  onClick={() => {
                    dispatch(fetchWeatherCityName(searchLocationInput))
                    setFocused(false)
                  }}
                >
                  Search
                </LoadingButton>
              </InputAdornment>
            ),
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={styles.searchIcon} />
              </InputAdornment>
            ),
            style: {
              fontSize: isDesktop ? 16 : 12,
            },
            disableUnderline: true,
          }}
          sx={styles.textFieldContainer}
          placeholder="Find location..."
          onChange={handleSearch}
        />
      </AccordionSummary>

      <CitiesSearchList onClose={() => setFocused(false)} />
    </Accordion>
  )
}

const styles: MyStylesType = {
  textFieldContainer: {
    width: '100%',
    height: { md: 40, sm: 30 },
    backgroundColor: colors.winter,
    borderRadius: 4,
    padding: 1,
  },
  searchIcon: {
    marginBottom: 1,
    width: { md: 30, sm: 20 },
    height: { md: 30, sm: 20 },
  },
  loadingButton: {
    width: { md: 30, sm: 20 },
    height: { md: 30, sm: 20 },
    color: colors.grey,
    backgroundColor: colors.winter,
    mb: 1,
    boxShadow: 0,
    borderColor: colors.grey,
    borderWidth: 0.5,
  },
  clearIcon: {
    marginLeft: -1,
    mb: 1,
  },
}

export default TextSearch
