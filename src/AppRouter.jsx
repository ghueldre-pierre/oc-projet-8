import { createBrowserRouter } from "react-router-dom";

import { PageLayout } from './pages/PageLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LogementPage } from './pages/LogementPage';
import { ErrorPage } from './pages/ErrorPage';

import { LOGEMENT_DATA_URL } from "./AppConfig.js";

const AppRouter = createBrowserRouter(
[
    {
      element: <PageLayout />,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/a-propos",
          element: <AboutPage />
        },
        {
          path: "/logements/:logementID",
          element: <LogementPage />,
          loader: async ({ params }) => {
            const res = await fetch(LOGEMENT_DATA_URL);
            const data = await res.json();
            const logementData = data.find((logement) => {
              return logement["id"] === params["logementID"];
            });
            //console.log(logementData);
            if(! logementData) throw new Response("Not Found", { status: 404 });
            
            return logementData;
          }
        }
      ]
    }
]);

export { AppRouter };