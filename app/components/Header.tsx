import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { BiMenu } from "react-icons/bi";
import { BiMenuAltRight } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import style from './Header.module.css'
import Link from "next/link";
import Image from "next/image";
function Header() {
  //   let func = () => {
  //     let togglebutton = document.getElementById('menu') as HTMLButtonElement;
  //     let sidebar = document.getElementById('opt') as HTMLElement;

  //     togglebutton.addEventListener('click',() => {
  //         if(sidebar.style.display === 'none'){
  //             sidebar.style.display = 'block'
  //         }else{
  //             sidebar.style.display = 'none'
  //         }
  //     })
  // }
  return (
    <div className={style.nav}>
      <nav className="w-full py-4 px-6 flex justify-between items-center bg-white shadow-md font-michroma">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
              <Image
              className="md:hidden block"
          src="/Shop3.png" // MUST start with /
          alt="logo"
          width={70}
          height={90}
        />
              <Image
              className="hidden md:block"
          src="/Shop1.png" // MUST start with /
          alt="logo"
          width={188}
          height={68}
        />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <Link href="/Products" className="hover:text-gray-600">Products</Link>
          <Link href="/Cart" className="hover:text-gray-600">Cart</Link>
          {/* <Link href="/login" className="hover:text-gray-600">Login</Link> */}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <input type="checkbox" id="sidebar-active" className="hidden" />
          <label htmlFor="sidebar-active" className="cursor-pointer">
        <BiMenuAltRight size={30} />
          </label>

          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform translate-x-full transition-transform duration-200 ease-in-out
            [input:checked~&]:translate-x-0">
        <div className="p-6">
          <label htmlFor="sidebar-active" className="block mb-8 cursor-pointer">
            <CgClose size={24} />
          </label>
          <div className="flex flex-col space-y-6"> 
            <Link href="/" className="hover:text-gray-600">Home</Link>
            {/* <Link href="/about" className="hover:text-gray-600">About</Link> */}
            <Link href="/products" className="hover:text-gray-600">Products</Link>
            <Link href="/Cart" className="hover:text-gray-600">Cart</Link>
            {/* <Link href="/login" className="hover:text-gray-600">Login</Link> */}
          </div>
        </div>
          </div>
          
          {/* Overlay */}
          <label htmlFor="sidebar-active" className="fixed inset-0  bg-opacity-50 hidden
                       [input:checked~&]:block"></label>
        </div>
      </nav>
        </div>
  );
}

export default Header;
