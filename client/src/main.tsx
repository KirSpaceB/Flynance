import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupPage from './components/ui/SignupPage.tsx'
import LoginPage from './components/ui/LoginPage.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/signup',
    element: <SignupPage/>
  },
  {
    path:'/login',
    element:<LoginPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
