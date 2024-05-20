import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import { BrandsPage, ContactPage, HomePage, AboutPage, CatalogPage, ErrorPage } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/catalog",
        element: <CatalogPage/>,
      },
      {
        path: "/brands",
        element: <BrandsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;

