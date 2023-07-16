import { Box, Typography } from '@mui/material'
import { alignHeadline, variantHeadline } from '../../utils/types'

/**
Reusable component for all the titles(headlines) on the pages
by default is already set:
@prop: align, to align the text, by default it`s: center, but can be change with props, alternativa values: 'left', 'right', 'justify'
@prop: variantHeadline: by default it`s 'h1', alternative values: 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', it`s all in a type. As it`s
@prop: colorHeadline: by default it`s 'secondary', alternativa values: 'primary'
*/
interface HeadlineProps {
  variantHeadline?: variantHeadline
  title?: string
  alignHeadline?: alignHeadline
  colorHeadline?: string
  padding?: string
}

export const Headline: React.FC<HeadlineProps> = ({
  variantHeadline,
  title,
  alignHeadline,
  colorHeadline,
  padding
}) => {
  return (
    <Box sx={ { width: '90%', margin: '0 auto' } }>
      <Typography
        variant={ variantHeadline ? variantHeadline : 'h1' }
        align={ alignHeadline ? alignHeadline : 'center' }
        color={ colorHeadline ? colorHeadline : 'primary' }
        padding={ padding ? padding : '1rem 0.50rem' }
      >
        { title ? title : 'Title not found' }
      </Typography>
    </Box>
  )
}
