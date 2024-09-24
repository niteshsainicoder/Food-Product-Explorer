"use client"

export   const  Nav=()=> {


  return (
    <div className="w-full  h-20 z-10 text-orange-500 bg-zinc-100 bg-opacity-20 sticky top-0   flex border-b border-white   text-grey-100 ">
      <div className="w-6/12 sm:w-5/12 font-bold antialiased  text-2xl h-full  flex justify-center items-center">
        Food Product
      </div>
      <div className="w-6/12 h-full sm:hidden  flex items-center justify-end">
        <div className="border border-neutral-300 rounded-full px-3 py-1">
          <input type="text" placeholder="search" className="" />
          <button type="button">🔍</button>
        </div>
      </div>




    </div >
  )
}

