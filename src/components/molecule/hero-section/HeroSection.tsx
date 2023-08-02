import { Box } from '@mui/material'
import { BackgroundSection } from '../../atom/BackgroundSection'
import heroImage from '../../../assets/hero-pic.jpg'
import { Headline } from '../../atom/Headline'
import PrimaryButton from '../../atom/PrimaryButton'
import { TEXT_HOME } from '../../../utils/lenguage'
import { heroSectionStyles } from './HeroSectionStyles'

interface HeroSectionProps {
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section>
      <BackgroundSection srcImg={ heroImage } srcHeight='520px'>
        <Box sx={ heroSectionStyles.container }>
          <Headline
            title={ TEXT_HOME.h1 }
            colorHeadline='#fff'
            variantHeadline='h1'
          />
          <Headline
            title={ TEXT_HOME.h2 }
            colorHeadline='#fff'
            variantHeadline='h2'
          />
          <PrimaryButton textBtn={ TEXT_HOME.heroBtn } sx={ heroSectionStyles.ctaBtn } />
        </Box>
      </BackgroundSection>
    </section>
  )
}
