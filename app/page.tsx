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
    <>
      <Header />
      <Main/>
      <Courses/>
      <Collabrations/>
      <Preview/>
      <Partner/>
      <Testimonial/>
      <Footer/>
      {/* <Achievements/> */}
    </>
  )
}

export default page