'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    const model = document.querySelector('.main');
    setTimeout(() => {

      if (model) {
        model.classList.add('translate-y-12', 'opacity-100'); // Add classes to make it visible
        model.classList.remove('translate-y-36', 'opacity-0'); // Remove classes that hide the element
      }
    }, 1000);
  }, []);

  return (
    <div className='min-h-screen  max-h-screen relative   '>
      <div className=' w-full h-screen flex justify-center items-center bg-gradient-to-t from-zinc-500 via-neutral-300 to-slate-500 bg-opacity-40 '>


        <div className='main  translate-y-36 opacity-0 ease-in-out transition-all duration-1000'>
          <h1 className='font-bold text-4xl text-neutral-500'>Explore Our Food Products!</h1>
          <h2 className='text-3xl font-semibold text-neutral-700'>Curated food products just for you, delivered with care.</h2>
          <p className='text-xl font-medium text-neutral-800'>Find everything from organic produce to artisanal snacks—your next meal starts here!</p>
        </div>
        <Image src="/hero.jpeg" alt="nothing" width={600} height={600} className='z-100 mix-blend-multiply aspect-auto' placeholder='blur' blurDataURL="/hero.jpeg" />
      </div>
      <button type='button' onClick={() => {
        const targetElement = document.getElementById("products");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }} className='w-32 rounded-xl hover:pl-2 text-neutral-100 h-12 hover:bg-slate-900 bg-slate-800 absolute top-3/4 letf-2/4 translate-x-2/4 -translate-y-2/3 '>Explore Now <span className='  transition -translate-y-2 '>→</span></button>
    </div >
  );
}

export default HeroSection;
