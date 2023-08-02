import { Box } from '@mui/material'
import { BackgroundSection } from '../../atom/BackgroundSection'
import ctaImage from '../../../assets/recipes_pattern.jpg'
import { Headline } from '../../atom/Headline'
import PrimaryButton from '../../atom/PrimaryButton'
import { TEXT_HOME } from '../../../utils/lenguage'

interface CTASectionProps {

}

export const CTASection: React.FC<CTASectionProps> = () => {
  return (
    <section>
      <BackgroundSection srcImg={ ctaImage } srcHeight='520px'>
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
            title={TEXT_HOME.ctaSectionTitle}
            colorHeadline='#fff'
            variantHeadline='h2'
          />
          <Headline
            title={TEXT_HOME.ctaSectionText}
            colorHeadline='#fff'
            variantHeadline='h3'
          />
          <PrimaryButton
            textBtn={TEXT_HOME.ctsSectionBTn}
            sx={{
              padding: '1rem 2rem',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          />
        </Box>
      </BackgroundSection>
    </section>
  )
}
