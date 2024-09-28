'use client'
import React, { useEffect, useState } from 'react'

function PageLoading() {
  const [loading, setloading] = useState(true);
  const [increasebar, setbar] = useState(false);
  useEffect(() => {
    setbar(true)
    setTimeout(() => {
      setloading(!loading)
    }, 1000);
  }, [])

  return (
    <div onClick={() => setloading(!loading)} className={`absolute ${loading ? 'translate-y-0' : '-translate-y-full'} ease-linear duration-500 gpu w-screen h-screen text-center flex items-center justify-center bg-gradient-to-b from-zinc-500 to-neutral-600  z-50 `}>
      <h1 className={`text-6xl font-bold before:absolute  before:rotate-180 
      before:h-1 ${increasebar ? 'before:w-[450px]' : ' before:w-0'}  before:transition-all before:duration-700 before:top-[calc(50%+45px)] before:rounded-md    ease-in-out before:bg-neutral-700 before:shadow-md  before:shadow-white  flex text-neutral-700 antialiased`}> Food Explorer

        <div className="text-6xl">
          <span className='animate-[ping_1s_ease-in-out_infinite] text-neutral-500'>.</span>
          <span className='animate-[ping_1.2s_ease-in-out_infinite] text-neutral-500'>.</span>
          <span className='animate-[ping_1.4s_ease-in-out_infinite] text-neutral-500'>.</span>
        </div>
      </h1>

    </div>
  )
}

export default PageLoading
