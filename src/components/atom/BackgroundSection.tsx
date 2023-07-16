import children from 'react'
import { Box } from '@mui/material'

/** 
 * Reusable component for a section with a background image:
 * - srcImg: is the src of the image display as a background
 */
interface BackgroundSectionProps {
  srcImg?: string
  children?: React.ReactNode
}

export const BackgroundSection: React.FC<BackgroundSectionProps> = ({
  srcImg,
  children
}) => {
  return (
    <Box sx={ {
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${ srcImg })`,
      backgroundRepeat: 'no-repeat',
      background: 'cover'
    } }>
      { children }
    </Box>
  )
}