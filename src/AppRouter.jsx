import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { PageLayout } from "./layouts/PageLayout";
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LogementPage } from './pages/LogementPage';
import { ErrorPage } from './pages/ErrorPage';

import { tryGetLogementDataById } from "./logementApi";

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

// une autre syntaxe possible...
/*
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: (
      <AppLayout>
        <ErrorPage />
      </AppLayout>
    ),
    children:[
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/a-propos",
        element: <AboutPage />
      },
      {
        path: "/logements/:logementID",
        element: <LogementPage />,
        errorElement: <ErrorPage />,
        loader: async ({ params }) => {
          const res = await fetch(LOGEMENT_DATA_URL);
          const data = await res.json();
          const logementData = data.find((logement) => {
            return logement["id"] === params["logementID"];
          });
          console.log(logementData);
          if(! logementData) throw new Response("Not Found", { status: 404 });
          console.log("ok");
          return logementData;
        }
      }
    ]
  }
]);
*/

export { AppRouter };