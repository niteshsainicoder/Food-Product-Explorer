"use client"

export const Nav = () => {


  return (
    <div className="w-full absolute  h-16 z-10  bg-slate-800 bg-opacity-20  top-0   flex border-b border-grey-600   ">
      <div className="w-6/12 sm:w-5/12 font-bold antialiased text-orange-500  text-2xl h-full  flex justify-center items-center">
        Food Product
      </div>
      <div className=" w-6/12 sm:w-7/12 h-full  flex items-center justify-center">
        <div className="border border-neutral-300 flex items-center justify-center  pl-2 w-3/6 rounded-full h-fit">
          <input type="text" placeholder="search" className="bg-transparent w-full caret-slate-900 h-7 p-1 pl-2 focus:border-none focus:outline-none " />
          <button type="button " className="p-1 w-1/12 border-l border-neutral-300">🔍</button>
        </div>
      </div>




    </div >
  )
}

