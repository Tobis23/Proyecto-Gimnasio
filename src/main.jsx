//------Librerias y elementos de React-----------
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

//-------Zona de paginas-----------

import { App } from './App.jsx'
import { Actividades } from './componentes/actividades.jsx';
import { Header } from './componentes/header.jsx';
import { Footer } from './componentes/footer.jsx';
import { Unete_ya } from './componentes/unete_ya.jsx';
import { Login } from './componentes/login.jsx';
import { Horariosventana } from './componentes/horariosventana.jsx';

//------------------
import './index.css'

//------------Estructura padre------------//
const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);


//------------Zona de Links------------//
const router = createBrowserRouter([
{
  path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/actividades",
        element: <Actividades />,
      },
      {
        path: "/unete_ya",
        element: <Unete_ya />,
      },
      {
        path: "/horariosventana",
        element: <Horariosventana />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ]
  }
]);
//-----------------
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
