import React, { useMemo } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';

function App() {

    const router = useMemo(() => createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/:username',
            element: <Resume />,
        },
        {
            path: '*',
            element: <span>empty</span>,
        },
    ]), []);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
