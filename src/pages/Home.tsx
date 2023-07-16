import { HeroSection } from '../components/molecule/hero-section/HeroSection'
import { CTASection } from '../components/molecule/cta-section/CTASection'

interface HomeProps {
}

export const Home: React.FC<HomeProps> = () => {
  return (
    <main>
      <HeroSection />
      <CTASection />
    </main>
  )
}
