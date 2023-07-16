import recipeById from '../api/recipe-by-id-mock.json'
import { RecipeTitle } from '../components/molecule/recipe-title/REcipeTitle'

interface RecipeProps {

}

export const Recipe: React.FC<RecipeProps> = () => {
  console.log(recipeById)
  const {
    title,
    vegetarian,
    vegan,
    glutenFree,
    veryHealthy,
    cheap,
    veryPopular,
    sustainable,
    image,
    analyzedInstructions
  } = recipeById
  const hashes = {
    vegetarian,
    vegan,
    glutenFree,
    veryHealthy,
    cheap,
    veryPopular,
    sustainable
  }
  // TODO: aca queda para las instrucciones
  console.log('analyzedInstructions', analyzedInstructions[0].steps)
  const arryInstructions = analyzedInstructions[0].steps.map(item => item.step)
  console.log('arryInstructions', arryInstructions)
  return (
    <main>
      <RecipeTitle title={title} hashes={hashes} image={image} />
    </main>
  )
}