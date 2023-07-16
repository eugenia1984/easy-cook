import children from 'react'
import { Box } from '@mui/material'

/** 
 * Reusable component for a section with a background image:
 * - srcImg: is the src of the image display as a background
 */
interface BackgroundSectionProps {
  srcImg?: string
  srcHeight?: string
  children?: React.ReactNode
}

export const BackgroundSection: React.FC<BackgroundSectionProps> = ({
  srcImg,
  srcHeight,
  children
}) => {
  return (
    <Box sx={ {
      height: `${ srcHeight ? srcHeight : '96vh' }`,
      backgroundImage: `url(${ srcImg })`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    } }>
      { children }
    </Box>
  )
}