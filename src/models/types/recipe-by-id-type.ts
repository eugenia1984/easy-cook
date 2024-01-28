export type RecipeByID = {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: any[];
  dishTypes: string[];
  diets: string[];
  occasions: any[];
  winePairing: WinePairing;
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
  originalId: null;
  spoonacularSourceUrl: string;
};

export type AnalyzedInstruction = {
  name: string;
  steps: Step[];
};

export type Step = {
  number: number;
  step: string;
  ingredients: Ent[];
  equipment: Ent[];
  length?: Length;
};

export type Ent = {
  id: number;
  name: string;
  localizedName: string;
  image: string;
};

export type Length = {
  number: number;
  unit: string;
};

export type ExtendedIngredient = {
  id: number;
  aisle: string;
  image: string;
  consistency: Consistency;
  name: string;
  nameClean: string;
  original: string;
  originalName?: string;
  amount: number;
  unit?: string;
  meta?: string[];
  measures?: Measures;
  measure?: Measure;
};

export enum Consistency {
  Liquid = "LIQUID",
  Solid = "SOLID",
}

export type Measure = {
  us: Metric;
  metric: Metric;
};

export type Metric = {
  amount: number;
  unitShort?: string;
  unitLong: string;
};

export type Measures = {
  us?: Metric;
  metric: Metric;
};

export type WinePairing = {
  pairedWines: string[];
  pairingText: string;
  productMatches: ProductMatch[];
};

export type ProductMatch = {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  averageRating: number;
  ratingCount: number;
  score: number;
  link: string;
};
