import {
  Box,
  Grid,
  Paper,
  Typography
} from '@mui/material'
import { Headline } from '../../atom/Headline'

interface RecipeTitleProps {
  title: string
  hashes: object
  image: string
}

export const RecipeTitle: React.FC<RecipeTitleProps> = ({
  title,
  hashes,
  image
}) => {
  const filteredHashes = Object.entries(hashes).filter(([key, value]) => value)
  return (
    <Box sx={ { background: '#DCDDE3', marginBottom: '160px' } }>
      <Paper
        sx={ {
          background: '#C3C4C9',
          maxWidth: '800px',
          margin: '0px auto',
          position: 'relative',
          top: '100px'
        } }
        elevation={24}
      >
        <Grid container>
          <Grid item xs={ 12 } sm={ 6 }>
            <Headline title={ title } colorHeadline='black' />
            <Typography align="center" sx={ { paddingBottom: '0.5rem' } }>
              { filteredHashes.map(([key]) => (
                <span key={ key }>#{ key } </span>
              )) }
            </Typography>
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <img src={ image } alt={ title } width='100%' height='100%' />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}