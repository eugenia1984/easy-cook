import { Box } from '@mui/material'
import { BackgroundSection } from '../../atom/BackgroundSection'
import heroImage from '../../../assets/hero-pic.jpg'
import { Headline } from '../../atom/Headline'
import PrimaryButton from '../../atom/PrimaryButton'

interface HeroSectionProps {

}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section>
      <BackgroundSection srcImg={ heroImage } srcHeight='520px'>
        <Box sx={ {
          background: 'linear-gradient(180deg,rgba(0,0,0,.25),rgba(0,0,0,.5))',
          height: '100%',
          zIndex: 1,
          padding: {
            xs: '1rem 2rem',
            sm: '1rem 5rem',
            md: '1rem 9rem'
          },
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem'
        } }>
          <Headline
            title='Join EasyCook'
            colorHeadline='#fff'
            variantHeadline='h1'
          />
          <Headline
            title='Thousands of Recipes. Endless Inspiration.'
            colorHeadline='#fff'
            variantHeadline='h2'
          />
          <PrimaryButton
            textBtn='TRY IT FOR FREE'
          />
        </Box>
      </BackgroundSection>
    </section>
  )
}
