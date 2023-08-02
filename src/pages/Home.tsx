import { HeroSection } from '../components/molecule/hero-section/HeroSection'
import { LatestRecipes } from '../components/molecule/latest-recipes/LatestRecipes'
import { CTASection } from '../components/molecule/cta-section/CTASection'
import { TEXT_HOME } from '../utils/lenguage'

interface HomeProps {
}

export const Home: React.FC<HomeProps> = () => {
  return (
    <main>
      <HeroSection />
      <LatestRecipes  title={TEXT_HOME.latestRecipesTitle}/>
      <CTASection />
    </main>
  )
}
