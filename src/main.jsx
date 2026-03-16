import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , createRoutesFromElements , Route, RouterProvider } from 'react-router'
import MainLayout from './components/Layout/MainLayout'
import Home from './pages/Home/Home'
import AuthPage from './pages/Auth/AuthPage'
import AuthLayout from './components/Layout/AuthLayout'
import ArtistsList from './pages/Artists/ArtistsList'
import CreateJob from "./pages/Jobs/CreateJob"
import JobLists from "./pages/Jobs/JobLists"
const router = createBrowserRouter(createRoutesFromElements(
  <>
      <Route path='/' element={<MainLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='marketplace/' element={<ArtistsList/>}/>
              <Route path='createProject/' element={<CreateJob/>}/>
              <Route path='jobs/' element={<JobLists/>}/>
      </Route>
      <Route path='/auth' element={<AuthLayout/>}>
               <Route path='login' element={<AuthPage/>}/>
      </Route>
  </>
))

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>
)
