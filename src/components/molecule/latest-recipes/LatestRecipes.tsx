import { Headline } from '../../atom/Headline'

interface LatestRecipesProps {
  title: string
}

export const LatestRecipes: React.FC<LatestRecipesProps> = ({ title }) => {
  return (
    <main>
      <Headline
        title={ title }
        alignHeadline='left'
        variantHeadline='h2'
        colorHeadline='black'
      />
    </main>
  )
}