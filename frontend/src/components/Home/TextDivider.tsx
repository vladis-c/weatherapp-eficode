import { Box, Typography, Divider } from '@mui/material'

import { colors } from '../../styles/colors'
import type { MyStylesType } from '../../types/types'

type TextDividerProps = {
  text: string
b: {
    md: number| string
    sm: number| string
    xs?: number| string
  }
}

const TextDivider = ({ text, b}: TextDividerProps) => {
  return (
    <Box sx={{ ...styles.sticky, bottom: b }}>
      <Box sx={{ width: 200 }}>
        <Typography sx={styles.titleXxs}>{text}</Typography>
      </Box>
      <Box sx={styles.divider} >
        <Divider />
      </Box>
    </Box>
  )
}

const styles: MyStylesType = {
  sticky: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: { md: '65%', sm: '100%' },
    px: { md: 0, sm: 2 },
  },
  divider: {
    backgroundColor: colors.winter,
    width: '100%',
    height: 0.01,
  },
  titleXxs: {
    fontWeight: 200,
    fontSize: { md: 14, sm: 12, xs: 12 },
    color: colors.winter,
  },
}

export default TextDivider
