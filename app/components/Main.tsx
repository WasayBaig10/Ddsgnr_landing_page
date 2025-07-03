import React from 'react'

function Main() {
  return (

    <div>
      <div className='h-[500px] mb-12 flex flex-col justify-center items-center bg-[url(/guts.jpg)] bg-cover bg-center text-white'>
          <h1  data-aos='fade-down' className="text-3xl font-bold text-center ">Welcome to Our Site</h1>
        <p  data-aos='fade-down' className="text-center text-lg mb-5">This is the main content area.</p>
        <div data-aos='fade-up' className="flex justify-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Click Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main