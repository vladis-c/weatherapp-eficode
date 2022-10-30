import { Box } from '@mui/material'

import { MyStylesType } from '../../types/types'

type HalfContainerProps = {
  children: React.ReactNode
  bgColor: string
  bottom?: boolean
}

const HalfContainer = ({ children, bgColor, bottom }: HalfContainerProps) => {
  return (
    <Box
      sx={{
        ...styles.container,
        backgroundColor: bgColor,
        pt: bottom ? { md: 10, sm: 3 } : { md: 12, sm: 10, xs: 8 },
        px: { md: 30, sm: 0 },
        pb: bottom ? { md: 6, sm: 0 } : 2,
        mb: bottom ? 10 : 0,
      }}
    >
      {children}
    </Box>
  )
}

const styles: MyStylesType = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 470,
    height: '50%',
  },
}

export default HalfContainer
