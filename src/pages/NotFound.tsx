import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { BackgroundSection } from '../components/atom/BackgroundSection'
import { Headline } from '../components/atom/Headline'
import PrimaryButton from '../components/atom/PrimaryButton'
import backgroundImage from '../assets/bg.jpg'

interface NotFoundProps {
}

export const NotFound: React.FC<NotFoundProps> = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/')

  return (
    <main>
      <BackgroundSection srcImg={ backgroundImage } srcHeight='90vh'>
        <Box
          sx={ {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem'
        }}
        >
        <Headline
          title='Ups ... recipe not found'
          colorHeadline='black'
        />
        <PrimaryButton
          textBtn='BACK TO HOME'
          sx={{
            padding: '1rem 2rem',
            letterSpacing: '1px'
          }}
          onClick={ handleClick }
        />
      </Box>
    </BackgroundSection>
    </main >
  )
}