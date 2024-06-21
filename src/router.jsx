import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import routes from './constants/routes';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import { RootLayout } from './pages/rootLayout';
import { Index } from './pages';

// const Router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     children: [
//       {
//         path: routes.home,
//         element: <Home />,
//       },
//       //   children: [
//       {
//         path: routes.about,
//         element: <About />,
//       },
//       {
//         path: routes.projects,
//         element: <Projects />,
//       },
//       {
//         path: routes.contact,
//         element: <Contact />,
//       },
//       //   ],
//       // },
//     ],
//   },
// ]);

const Router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: routes.index,
        element: <Index />,
        children: [
          {
            path: routes.about,
            element: <About />,
          },
          {
            path: routes.projects,
            element: <Projects />,
          },
          {
            path: routes.contact,
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);

export default Router;
