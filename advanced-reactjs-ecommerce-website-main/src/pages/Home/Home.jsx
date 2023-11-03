import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import LocationSprade from './LocationSprade'
import CategoryShowCase from './CategoryShowCase'

const Home = () => {
  return (
    <div>
        <Banner/>
        <HomeCategory/>
        <CategoryShowCase/>
        <LocationSprade/>
    </div>
  )
}

export default Home