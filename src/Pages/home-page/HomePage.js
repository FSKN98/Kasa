import React from 'react'
import "./HomePage.css"
import banner from "../../Images/Banner/Banner.png"

export default function HomePage() {
  return (
    <div className='homePageContainer'>
   <img src={banner} className="banner" />
      <div>HomePage</div>
    </div>
  )
}
