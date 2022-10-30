import { Box, Typography, Divider, SxProps, Theme } from '@mui/material'

import { colors } from '../../styles/colors'
import type { MyStylesType } from '../../types/types'

type TextDividerProps = {
  text: string
  sx?: SxProps<Theme>
  textColor? : string
}

const TextDivider = ({ text, sx, textColor }: TextDividerProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: { md: '65%', sm: '100%' },
        px: { md: 0, sm: 2 },
        ...sx,
      }}
    >
      <Box sx={{ width: 200 }}>
        <Typography sx={{...styles.titleXxs, color: textColor? textColor:colors.winter,}}>{text}</Typography>
      </Box>
      <Box sx={styles.divider}>
        <Divider />
      </Box>
    </Box>
  )
}

const styles: MyStylesType = {
  divider: {
    backgroundColor: colors.winter,
    width: '100%',
    height: 0.01,
  },
  titleXxs: {
    fontWeight: 200,
    fontSize: { md: 14, sm: 12, xs: 12 },
  },
}

export default TextDivider
