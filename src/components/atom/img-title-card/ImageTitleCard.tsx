import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../PrimaryButton'
import { TEXT_HOME } from '../../../utils/lenguage'
import { ImageTitleCardStyles } from './ImageTitleCardStyles'

interface ImageTitleCardProps {
  imgSrc: string
  imgTitle: string
  recipeId: number
}

export const ImageTitleCard: React.FC<ImageTitleCardProps> = ({
  imgSrc,
  imgTitle,
  recipeId
}) => {
  const navigate = useNavigate()

  return (
    <Box sx={ ImageTitleCardStyles.boxContainer }>
      <Card sx={ { maxWidth: 345 } }>
        <CardMedia
          component="img"
          alt={ imgTitle }
          height="140"
          image={ imgSrc }
        />
        <CardContent sx={ ImageTitleCardStyles.cardContent }>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={ ImageTitleCardStyles.title }
            padding='8px 8px 0px 8px'
          >
            { imgTitle }
          </Typography>
          <PrimaryButton
            textBtn={ TEXT_HOME.latestRecipesBtn }
            sx={ ImageTitleCardStyles.btn }
            onClick={ () => navigate(`/recipe/${ recipeId }`) }
          />
        </CardContent>
      </Card>
    </Box>
  )
}
