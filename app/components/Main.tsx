import React from 'react'
import ScrollReveal from './animations/ScrollText'
import ScrollFloat from './animations/ScrollText'
import ScrollText from './animations/ScrollText'
import ScrollWordDrop from './animations/ScrollText'

function Main() {
  return (

    <div className='font-tektur text-2xl'>
      <div className='h-[500px] flex flex-col justify-center items-center bg-[url(/guts.jpg)] bg-cover bg-center text-white mb-40'>
        <h1 data-aos='fade-down' className="text-3xl font-bold text-center ">Welcome to Our Site</h1>
        <p data-aos='fade-down' className="text-center text-lg mb-5">This is the main content area.</p>
        <div data-aos='fade-up' className="flex justify-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Click Me
          </button>
        </div>
      </div>

      <div className='text-center'>

       <main className="min-h-screen p-10 space-y-40 text-gray-950 bg-white text-4xl font-bold">
      <div className="h-fit flex items-center justify-center">
        <ScrollWordDrop text="Scroll down to see the magic unfold." />
      </div>
      <div className="h-fit flex items-center justify-center">
        <ScrollWordDrop text="Each word drops in smoothly and unblurs." />
      </div>
      <div className="h-fit flex items-center justify-center">
        <ScrollWordDrop text="Modern, minimal, and scroll-triggered ✨" />
      </div>
    </main>
        </div>
      </div>
  )
}

export default Main