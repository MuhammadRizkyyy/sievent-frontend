import React from 'react'
import Hero from '../components/Home/Hero'
import EventTerdekat from '../components/Home/EventTerdekat'
import EventGratis from '../components/Home/EventGratis'
import ToLogin from '../components/Home/ToLogin'

const Home = () => {
  return (
    <div className='h-full'>
    <Hero />
    <div>
    <EventTerdekat />
    </div>
    <div className="p-12 h-auto bg-gradient-to-b from-blue-200 via-white to-blue-20">
    <EventGratis />
    </div>
    <div>
    <ToLogin />
    </div>
    </div>
  )
}

export default Home