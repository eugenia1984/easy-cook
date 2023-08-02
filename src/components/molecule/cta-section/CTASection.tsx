import { Box } from '@mui/material'
import { BackgroundSection } from '../../atom/BackgroundSection'
import ctaImage from '../../../assets/recipes_pattern.jpg'
import { Headline } from '../../atom/Headline'
import PrimaryButton from '../../atom/PrimaryButton'
import { TEXT_HOME_CTA_SECTION } from '../../../utils/lenguage'
import { CTASectionStyles } from './CTASectionStyles'

interface CTASectionProps {
}

export const CTASection: React.FC<CTASectionProps> = () => {
  return (
    <section>
      <BackgroundSection srcImg={ ctaImage } srcHeight='520px'>
        <Box sx={ CTASectionStyles.boxContainer }>
          <Headline
            title={ TEXT_HOME_CTA_SECTION.title }
            colorHeadline='#fff'
            variantHeadline='h2'
          />
          <Headline
            title={ TEXT_HOME_CTA_SECTION.text }
            colorHeadline='#fff'
            variantHeadline='h3'
          />
          <PrimaryButton 
            textBtn={ TEXT_HOME_CTA_SECTION.btn }
            sx={ CTASectionStyles.btn }
          />
        </Box>
      </BackgroundSection>
    </section>
  )
}
