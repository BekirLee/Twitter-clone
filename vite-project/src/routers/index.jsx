import { createBrowserRouter } from 'react-router-dom'
import Explore from '~/pages/explore'
import Home from '~/pages/home'
import Notifications from '~/pages/notifications'
import Mainlayout from '../layouts/main'
import ErrorPage from '~/pages/errorPage/error'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'notifications',
                element: <Notifications />
            },
            {
                path: 'explore',
                element: <Explore />
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ]
    }
])

export default routes