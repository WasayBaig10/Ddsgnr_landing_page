import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Achievements from './components/Achievements'
import Collabrations from './components/Collabrations'
import Courses from './components/Courses'
import Preview from './components/Preview'
import Testimonial from './components/Testimonial'
import Partner from './components/Partner'
import Footer from './components/Footer'
function page() {
  return (
    <div className='space-y-20'>
      <Header />
      <Main/>
      <Collabrations/> 
      <Courses/>
      <Preview/>
      <Partner/>
      <Testimonial/>
      <Footer/>
      {/* <Achievements/> */}
    </div>
  )
} 

export default page