import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import recipeById from '../api/recipe-by-id-mock.json'
import { RecipeInstructions } from '../components/molecule/recipe-instructions/RecipeInstructions'
import { RecipeTitle } from '../components/molecule/recipe-title/RecipeTitle'
import useLoading from '../hooks/useLoading'

interface RecipeProps {
}

export const Recipe: React.FC<RecipeProps> = () => {
  const param  = useParams<{idRecipe: string}>()
  const idRecipe = param.idRecipe
  const [recipe, setRecipe] = useState<any>(recipeById)
  const [error, setError] = useState<string | null>(null)
  const URL = `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=53a439d043394e38a4d1b891ad903e34`

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        //addLoading()
        const response = await fetch(URL)
        if (!response.ok) {
          throw new Error('Error HTTP: ' + response.status)
        }
        const data = await response.json()
        setRecipe(data)
      } catch (error) {
        setError(error.message)
      } finally {
        //removeLoading()
      }
    }

    fetchRecipe()
  }, [idRecipe])

  useEffect(() => {
    // Aquí puedes hacer algo con el estado "recipe" o "error" si lo necesitas.
    // Por ejemplo, puedes realizar alguna acción adicional o mostrar un mensaje de error.
    if (recipe) {
      console.log('Recipe data:', recipe);
    }

    if (error) {
      console.error('Error fetching recipe:', error);
    }
  }, [recipe, error]);
  
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