import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { MainLayout } from './layouts/MainLayout'
import { HomePage } from './pages/HomePage'
import { MyProjects } from './pages/MyProjects'
import { AboutMePage } from './pages/AboutMePage'

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/about' element={<AboutMePage />} />
                <Route path='/projects' element={<MyProjects />} />
            </Route>
        )
    )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
