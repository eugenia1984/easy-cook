import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'


interface ImageTitleCardProps {
  imgSrc: string
  imgTitle: string
}

export const ImageTitleCard: React.FC<ImageTitleCardProps> = ({
  imgSrc,
  imgTitle
}) => {
  return (
    <Box sx={ { width: '90%', margin: '0 auto' } }>
      <Card sx={ { maxWidth: 345 } }>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={ imgSrc }
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              minHeight: {xs: '140px', sm: '60px', md:'40px'}
            }}
          >
            { imgTitle }
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
