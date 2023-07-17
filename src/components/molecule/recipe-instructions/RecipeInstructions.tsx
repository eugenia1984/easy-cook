import {
  Container,
  Grid,
  List,
  ListItem
} from '@mui/material'
import { Headline } from '../../atom/Headline'
import { AnalyzedInstruction, ExtendedIngredient } from '../../../utils/types'

interface RecipeInstructionsProps {
  extendedIngredients: ExtendedIngredient[]
  analyzedInstructions: AnalyzedInstruction[]
  diets: string[]
  readyInMinutes: number
}

export const RecipeInstructions: React.FC<RecipeInstructionsProps> = ({
  extendedIngredients,
  analyzedInstructions,
  diets,
  readyInMinutes
}) => {
  const instructionsSteps = analyzedInstructions[0].steps
  const equipment = instructionsSteps.filter(item => item.equipment.length > 0)

  return (
    <Container
      maxWidth='lg'
      sx={ { marginBottom: '3rem' } }
    >
      <Grid container  >
        <Grid
          item
          xs={ 12 }
          sm={ 4 }
          sx={ { background: '#DCDDE3' } }
        >
          <Headline
            title='Ingredients'
            colorHeadline='black'
            alignHeadline='left'
          />
          <List sx={ { width: '90%', margin: '0px auto' } }>
            { extendedIngredients &&
              extendedIngredients.map((element, index) =>
                <ListItem key={ `${ index }-${ element.name }` }>
                  { element.measures?.metric.amount } { element.measures?.metric.unitShort } { element.name }
                </ListItem>) }
          </List>
          <Headline
            title='Equipment'
            colorHeadline='black'
            alignHeadline='left'
          />
          <List sx={ { width: '90%', margin: '0px auto' } }>
            { equipment && equipment.map((element, index) =>
              <ListItem key={ `equipment-${ index }` } sx={ { gap: '6px' } }>
                <img
                  src={ `https://spoonacular.com/cdn/equipment_100x100/${ element.equipment[0].image }` }
                  width='50px'
                /> { element.equipment[0].name }
              </ListItem>
            ) }
          </List>
        </Grid>
        <Grid
          item
          xs={ 12 }
          sm={ 8 }
          sx={ { paddingTop: { xs: '2.75rem', sm: '0rem', md: '0rem' } } }
        >
          <Headline
            title='Preparation'
            alignHeadline='left'
            padding='0rem 1rem'
          />
          <List sx={ { width: '90%', margin: '0px auto' } }>
            {
              instructionsSteps && instructionsSteps.map((item, index) =>
                <ListItem key={ `prep - ${ index }` }>{ index + 1 }- { item.step }</ListItem >)
            }
          </List>
          <Headline
            title={ `Requires approximately ${ readyInMinutes } minutes` }
            alignHeadline='left'
            variantHeadline='h3'
            colorHeadline='black'
          />
          {
            diets.length > 0 &&
            <>
              <Headline
                title='Diets'
                padding='1rem 0.75rem 0rem'
                alignHeadline='left'
              />
              <List sx={ { width: '90%', margin: '0px auto' } }>
                {
                  diets && diets.map((item, index) =>
                    <ListItem
                      key={ `diet - ${ index }` }
                      sx={ { paddingTop: '0px', paddingBottom: '0px' } }
                    >
                      { item }
                    </ListItem>)
                }
              </List>
            </>
          }
        </Grid>
      </Grid>
    </Container>
  )
}