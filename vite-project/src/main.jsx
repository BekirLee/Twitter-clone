import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from './routers'
import { Provider } from 'react-redux'
import './assets/css/tailwind.css'
import store from './store'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>

    <Provider store={store}>

      <RouterProvider router={routes} />

    </Provider>
  </div>
)
