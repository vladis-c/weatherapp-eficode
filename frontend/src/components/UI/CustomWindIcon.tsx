import NorthWestIcon from '@mui/icons-material/NorthWest'
import NorthIcon from '@mui/icons-material/North'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import EastIcon from '@mui/icons-material/East'
import SouthEastIcon from '@mui/icons-material/SouthEast'
import SouthIcon from '@mui/icons-material/South'
import SouthWestIcon from '@mui/icons-material/SouthWest'
import WestIcon from '@mui/icons-material/West'

import { colors } from '../../styles/colors'
import { WindEnum } from '../../enums/enums'

const CustomWindIcon = ({ direction }: { direction: WindEnum }) => {
  const iconColor = colors.darkRed

  if (direction === WindEnum.N) {
    return <NorthIcon sx={{ color: iconColor }} />
  }
  if (direction === WindEnum.NE) {
    return <NorthEastIcon sx={{ color: iconColor }} />
  }
  if (direction === WindEnum.E) {
    return <EastIcon sx={{ color: iconColor }} />
  }
  if (direction === WindEnum.SE) {
    return <SouthEastIcon sx={{ color: iconColor }} />
  }
  if (direction === WindEnum.S) {
    return <SouthIcon sx={{ color: iconColor }} />
  }
  if (direction === WindEnum.SW) {
    return <SouthWestIcon sx={{ color: iconColor }} />
  }
  if (direction === WindEnum.W) {
    return <WestIcon sx={{ color: iconColor }} />
  }
  if (direction === WindEnum.NW) {
    return <NorthWestIcon sx={{ color: iconColor }} />
  } else {
    return null
  }
}

export default CustomWindIcon
