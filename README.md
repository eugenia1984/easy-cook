# <img width="40" height="40" src="https://img.icons8.com/plasticine/40/monitor.png" alt="monitor"/> EASY COOK



## <img width="40" height="40" src="https://img.icons8.com/plasticine/40/monitor.png" alt="monitor"/> Technologies

| Technologies used                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------- |
| <img width="30" height="30" src="https://img.icons8.com/color/30/html-5--v1.png" alt="html5 icon"/> HTML5           |
| <img width="30" height="30" src="https://img.icons8.com/color/30/css3.png" alt="css3 icon"/> CSS3                   |
| <img width="30" height="30" src="https://img.icons8.com/officel/30/react.png" alt="react icon"/> React              |
| react-router-dom                                                                                                    |
| <img width="30" height="30" src="https://img.icons8.com/color/30/typescript.png" alt="typescript icon"/> TypeScript |
| [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction), for general states                            |
| [axios](https://axios-http.com/docs/intro), for fetching data                                                       |

---

## <img width="30" height="30" src="https://img.icons8.com/plasticine/30/monitor.png" alt="monitor"/> LINKS

💻 -> [Canva with the mockup](https://www.canva.com/design/DAFiuea8ges/_sspazzLlNLHfqRZ10OZDQ/edit)

---

## <img width="30" height="30" src="https://img.icons8.com/plasticine/30/monitor.png" alt="monitor"/> MVP (Minimum Product Viable)

- Create a React Application, to have the Front End for **Easy-Cook**, an app where you can:

- Login with:

```
user: admin@email.com
password: 123456
```

- Search recipes

- Add recipes to favorites list

- See the recipe detail page

Create the **FrontEnd** for a **web site** that use a **public API**, using:

- All the recipes information are fetch with an **API** (Spoonacular)

---

## <img width="30" height="30" src="https://img.icons8.com/plasticine/30/monitor.png" alt="monitor"/> Requirements

### Web Site/Application:

- That can be **browsed from a PC or cell phone without losing information**.

- 2 sections of **static content**

- 1 section of **dynamic content** consuming **public API** of your choice.

- 1 section with a **contact form** (front-end implementation only).

- 1 user/key protected section that allows to have a private area.

- **1 List ordered** by some criteria.

- **1 List with search engine** by some criteria (can be the same as the previous item).

- The code must be published in an open GIT repository.

- Best practices applied for front-end in general (html, css, js + angular ).

- **Data from different endpoints related to each other**, for example movies associated to directors, or actors.

---

### <img width="30" height="30" src="https://img.icons8.com/plasticine/30/monitor.png" alt="monitor"/> OPTIONAL REQUIREMENTS

- **Publish** the website on an online hosting.

- Add **good SEO practices**.

---

### <img width="30" height="30" src="https://img.icons8.com/plasticine/30/monitor.png" alt="monitor"/> FOLDER STRUCTURE

```
> node_modules
> public
  > img
> src
  > api
  > assets
  > components
    > commond-components
    > sections
    > ui
      > buttons
      > form
      > headlines
      > loader
      > text
    > views
  > languages
  > layouts
  > models
    > types
  > pages
    Contact
    Home
    Login
    NotFound
    Recipe
    Search
  > routes
  > theme
  > utils
  .eslintrc.js
  .gitignore
  index.html
  package-lock.json
  packege.json
  README.md
  tsconfig.json
  stconfig.node.json
  vite.config.ts
```

### What you will find?

- `components` all the components that I'm using in the app, as they are many I separate in: `coommond-components`, `sections` and `ui` (all the atomic components like buttons, titles, text, etc).

- `languages` all the text in the app is store in an `enum` or a `constant`.

- `models` as I'm working with TYpeScript here I collect all the `classes`, `interfaces` or `types` that I'm using in the application.

- `pages` for the pages of the app.

- `routes`, to create the constants of the URL of the app, and with **React-router-dom** create one public route (Login page) and the rest converted to protected routes.

- `store` to manage the global stated with **zustand**.

- `theme` where I created the general theme used in the entired application.

---

### <img width="30" height="30" src="https://img.icons8.com/plasticine/30/monitor.png" alt="monitor"/> COMPONENTS

As I do not use a third party library I create my our components.

- Inside `components/ui` you can find the atom components, such
  as: buttons, atom components for forms, headlines, loader, text.

- Inside the `commond-components` you can find some reusable components for the app, such as: cards.

- Inside the `components/sections` you can finde the sections, such as: header, footer.

---

### <img width="30" height="30" src="https://img.icons8.com/plasticine/30/monitor.png" alt="monitor"/> Image in `assets` folder example:

```TSX
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>EasyCook</h1>
    </>
  )
}

export default App
```

---

## NOTE

I appreciate your interest in this Project ⌨️ with ❤️ by [María Eugenia Costa](https://github.com/eugenia1984) 😊 and follow me at [LinkedIn - maria-eugenia-costa](https://www.linkedin.com/in/maria-eugenia-costa/)

---
