import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PageLayout } from './routes/PageLayout.jsx';
import { HomePage } from './routes/HomePage.jsx';
import { AboutPage } from './routes/AboutPage.jsx';
import { LogementPage } from './routes/LogementPage.jsx';
import { ErrorPage } from './ErrorPage.jsx';

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    errorElement: <ErrorPage />, /* est-ce que ça va fonctionner pour toutes les routes ? je pense que oui ... */
    children:[
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/a-propos",
        element: <AboutPage />
      },
      {
        path: "/logement/:id",
        element: <LogementPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
