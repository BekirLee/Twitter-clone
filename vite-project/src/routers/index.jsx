import { createBrowserRouter } from 'react-router-dom'
import Explore from '~/pages/explore'
import Home from '~/pages/home'
import Notifications from '~/pages/notifications'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/notifications',
        element: <Notifications />
    },
    {
        path: '/explore',
        element: <Explore />
    }
])

export default routes