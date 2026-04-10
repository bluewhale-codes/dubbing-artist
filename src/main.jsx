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

const router = createBrowserRouter(createRoutesFromElements(
  <>
      <Route path='/' element={<MainLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='test/' element={<Test/>}/>
              <Route path='marketplace/' element={<ArtistsList/>}/>
              <Route path='profile/' element={<ProfilePage/>}/>
              <Route path='createProject/' element={<CreateJob/>}/>
              <Route path='proposal/' element={<ClientProposal/>}/>
              <Route path='jobs/' element={<JobLists/>}/>
              <Route path='detail/:id' element={<ProjectDetailPage/>}/>
      </Route>
      <Route path='/auth' element={<AuthLayout/>}>
               <Route path='login' element={<AuthPage/>}/>
      </Route>
  </>
))

createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <RouterProvider router={router}/>
  </Provider>
)
