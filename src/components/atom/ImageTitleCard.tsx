import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from './PrimaryButton'

interface ImageTitleCardProps {
  imgSrc: string
  imgTitle: string
  recipeId: string
}

export const ImageTitleCard: React.FC<ImageTitleCardProps> = ({
  imgSrc,
  imgTitle,
  recipeId
}) => {
  const navigate = useNavigate()

  return (
    <Box sx={ { width: '90%', margin: '0.25rem auto' } }>
      <Card sx={ { maxWidth: 345 } }>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={ imgSrc }
        />
        <CardContent sx={ { 
          padding: '6px !important',
          minHeight: { xs: '92px', sm: '92px', md: '86px' } 
          } }>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={ {
              minHeight: { xs: '62px', sm: '52px', md: '56px' }
            } }
            padding='8px 8px 0px 8px'
          >
            { imgTitle }
          </Typography>
          <PrimaryButton
            textBtn='+info'
            sx={{padding: '4px 8px', margin: '4px 4px 8px 4px'}}
            onClick={ () => navigate(`/recipe/${ recipeId }`) }
          />
        </CardContent>
      </Card>
    </Box>
  )
}
