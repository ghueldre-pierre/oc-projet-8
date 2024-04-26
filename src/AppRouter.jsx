import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { PageLayout } from "./pages/_layouts/MainLayout";
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LogementPage } from './pages/LogementPage';
import { ErrorPage } from './pages/ErrorPage';

import { tryGetLogementDataById } from "./logementApi";

/*
  1. Route est un composant fourni par la librairie de routage et il sert à faire le lien entre une URL (fictive) et un composant à rendre.

  2. C'est à travers l'attribut "path" que l'on spécife l'URL que l'on souhaite associer à une page. Ne pas oublier que l'on travaille avec des URL relatives.

  Il y a tout d'abord la route de base dont l'attribut `path` est un simple slash, au final sur le navigateur cela donnera :

  www.kasa.com/

  Les composants Route peuvent être imbriqués, quand c'est le cas, les URL spécifiés dans les Routes "enfants" 
  sont relatives à l'URL du composant Route "parent".

  Ainsi l'URL menant à la page « d'à propos » doit se lire : /a-propos et non simplement a-propos et au final sur le navigateur cela donnera :

  www.kasa.com/a-propos

  L'autre attribut important est "element" qui permet de spécifier le composant à rendre.
*/
const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<HomePage />} />
      <Route path="a-propos" element={<AboutPage />} />
      <Route 
        path="logements/:logementID"
        element={<LogementPage />}
        loader={tryGetLogementDataById}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<ErrorPage />}/>
    </Route>
  )
);

export { AppRouter };