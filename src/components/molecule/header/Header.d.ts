import { publicRoutes, privateRoutes } from '../../../router/routes'

export type Page = {
  text: string
  url: publicRoutes | privateRoutes
}

export type Pages = Page[]