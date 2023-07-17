import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import recipeById from '../api/recipe-by-id-mock.json'
import { RecipeInstructions } from '../components/molecule/recipe-instructions/RecipeInstructions'

import { RecipeTitle } from '../components/molecule/recipe-title/RecipeTitle'

interface RecipeProps {
}

export const Recipe: React.FC<RecipeProps> = () => {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(recipeById)
  console.log(id)
  useEffect(() => {
    // TODO: el llamado a la APi para setear recipe acorde al id
    // que recibo por URL y sacar le JSOn de prueba
  }, [])
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
    extendedIngredients,
    analyzedInstructions,
    diets,
    readyInMinutes
  } = recipe
  const hashes = {
    vegetarian,
    vegan,
    glutenFree,
    veryHealthy,
    cheap,
    veryPopular,
    sustainable
  }

  return (
    <main>
      <RecipeTitle
        title={ title }
        hashes={ hashes }
        image={ image }
      />
      <RecipeInstructions
        extendedIngredients={ extendedIngredients }
        analyzedInstructions={ analyzedInstructions }
        diets={ diets }
        readyInMinutes={ readyInMinutes }
      />
    </main>
  )
}