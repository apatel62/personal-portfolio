// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//importing all the pages and App.jsx
import App from './App';
import Home from './pages/Home';
import Error from './pages/Error';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/Portfolio',
                element: <Portfolio />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
            {
                path: '/Resume',
                element: <Resume />
            },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
  