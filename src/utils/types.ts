// Type for the buttons props
export type sizeBtn = 'small' | 'medium' | 'large'
export type colorBtn = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'

// Type for the title
export type variantHeadline = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2'
export type alignHeadline = 'right' | 'left' | 'center' | 'justify'

// Home sliders Latest Recipes section
export type HomeSlides = {
  sliders: Slider[]
}

export type Slider = {
  id: number
  title: string
  image: string
  imageType: ImageType
}

export enum ImageType {
  Jpg = "jpg",
  Png = "png"
}