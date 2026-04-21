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
import ProfilePage from './pages/Profile/ProfilePage'
import ClientProposal from './pages/Profile/ClientProposal'
import Test from './testing/Test'
import { Provider } from 'react-redux'
import store from './store/store'
import ProjectDetailPage from './pages/Jobs/ProjectDetailPage'
import Hello from './components/Hello'
import ScrollytellingSection from './components/ScrollytellingSection'
import Contract from './pages/Project/Contract'
import ProtectedRoute from './components/ProtectedRoute'

const router = createBrowserRouter(createRoutesFromElements(
  <>
      <Route path='/' element={<MainLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='test/' element={<Test/>}/>
              <Route path='marketplace/' element={<ArtistsList/>}/>
               
              <Route element={<ProtectedRoute/>}>
              <Route path='profile/' element={<ProfilePage/>}/>
              <Route path='createProject/' element={<CreateJob/>}/>
              <Route path='proposal/' element={<ClientProposal/>}/>
              </Route>


              <Route path='detail/:id' element={<ProjectDetailPage/>}/>


              <Route path='jobs/' element={<JobLists/>}/>
            
              <Route path='hello' element={<Hello/>}/>
              <Route path='mystory' element={<ScrollytellingSection/>}/>
              
      </Route>
      <Route path='/auth' element={<AuthLayout/>}>
               <Route path='login' element={<AuthPage/>}/>
               <Route path='contract/:id' element={<Contract/>}/>
      </Route>
     
  </>
))

createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <RouterProvider router={router}/>
  </Provider>
)
