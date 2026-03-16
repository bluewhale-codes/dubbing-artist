import React from 'react'
import { Outlet } from "react-router";


import VoiceHubHeader from '../VoiceHubHeader';
import { Footer } from '../Footer';
const MainLayout = () => {
  return (
    <>
            <VoiceHubHeader/>
            <Outlet/>
            <Footer/>
    </>

  )
}

export default MainLayout