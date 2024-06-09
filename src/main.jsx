import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import ProjectView from './Components/ProjectView.jsx'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element = {<App/>}/>
      <Route path='project-view/:id' element= {<ProjectView/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
