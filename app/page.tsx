'use client'

import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Cards from './components/Cards';
import BusinessCard from './components/desc';
import AOS from 'aos';
import style from './Header.module.css'
import 'aos/dist/aos.css';
import Categ from './components/Categ';
import ProductPage from './components/page';
import   { CarouselSize } from './components/Carousel';
import ReviewSection from './components/Review';
import LoginPage from './Login/page';
import { useSession } from '@supabase/auth-helpers-react';
import AuthPage from './appAuth/page';
import CartPage from './cart/page';

// import ProductList from './components/prodList';
  function Page() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "top-bottom",
      offset: 160
    });
  }, []); 

const session = useSession();
console.log('🧠 Session from hook:', session);

  return (
    <div className="space-y-20">
      {/* <Main />
      <Cards />
      <BusinessCard
        name="Your Name"
        company="Company / Brand Name"
        phone="0700000000"
        email="user@example.com"
        location="Location"
        website="yourwebsite.com"
      />  
      <Categ />       */}
      {/* <Footer />
      <ProductPage params={{
        id: ''
      }} />
      <CarouselSize />
      <ReviewSection productId='milk' /> */}
      {/* <ProductList /> */}
      {/* <AddToCartPage /> */}
      {/* <LoginPage /> */}
      <AuthPage />
      {/* <CartPage />   */}
    </div>
  );
}

export default Page;
