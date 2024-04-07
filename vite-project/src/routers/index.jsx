import { createBrowserRouter } from 'react-router-dom'
import Explore from '~/pages/explore'
import Home from '~/pages/home'
import Notifications from '~/pages/notifications'
import Mainlayout from '../layouts/main'
import ErrorPage from '~/pages/errorPage/error'
import Messages from '~/pages/messages'
import Lists from '~/pages/lists'
import Profile from '~/pages/profile'

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
                path: "messages",
                element: <Messages />
            },
            {
                path: "lists",
                element: <Lists />
            },
            {
                path: "*",
                element: <ErrorPage />
            },
            {
                path: ":slug",
                element: <Profile />
            }
        ]
    }
])

export default routes