import React, { useState } from 'react'
import NavBar from './Nav'
import CallToAction from './CallToAction'


export default function LandingPg() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      
      <NavBar/>
      <CallToAction/>
    </div>
  )
}
