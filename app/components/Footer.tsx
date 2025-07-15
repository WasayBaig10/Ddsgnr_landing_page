import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-6 font-michroma">
        <div className="container mx-auto text-center "> 
          <p className="text-sm mb-4">© 2025   K&S.   All   rights   reserved.</p>
          <p className="text-xs mt-2">Follow  us  on  social  media</p>
          <div className="mt-2 flex justify-center items-center">
            <a href="#" className="text-white mx-2"><FaFacebook/></a>
            <a href="#" className="text-white mx-2"><FaSquareXTwitter/></a>
            <a href="#" className="text-white mx-2"><FaInstagram/></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer