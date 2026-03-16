import React from 'react'
import VoiceHubHeader from '../../components/VoiceHubHeader'
import { Hero } from './Hero'
import { Features } from './Features'
import { HowItWorks } from './HowItWorks'
import { TopArtists } from './TopArtists'
import { Testimonials } from './Testimonials'
import { CallToAction } from './CallToAction'
import { Footer } from '../../components/Footer'
import {clsx} from 'clsx'
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from '../../components/ui/Button'

const Home = () => {

  function test(){
    const size="lg" 
    const variant="outline" 
    const className="text-lg px-8 py-6 border-2 border-gray-300 text-gray-700 hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50 group transform hover:scale-105 transition-all duration-300"
    console.log(buttonVariants({size,variant,className}))
  }
  return (
     <>
     
    
     <Hero/>
     <Features/>
     <HowItWorks/>
     <TopArtists/>
     <Testimonials/>
     <CallToAction/>
     
     </>

  )
}

export default Home