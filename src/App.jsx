import { useState } from 'react'
import VoiceHubHeader from './components/VoiceHubHeader'
import Home from './pages/Home/Home'
import AuthPage from './pages/Auth/AuthPage'
function App() {
  const [count, setCount] = useState(0)

  return (
   <AuthPage/>
  )
}

export default App
