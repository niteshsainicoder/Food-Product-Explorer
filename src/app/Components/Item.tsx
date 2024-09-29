import Image from 'next/image'
import React from 'react'

interface itemfile {
  image: string,
  foodname: string,
  category: string,
  nutrition: string,
  ingredients: string
}
export default function Item({ image, foodname, category, nutrition, ingredients }: itemfile) {
  return (
    <div className="w-[300px] hover:scale-105 transition duration-300   bg-violet-100 border flex flex-col gap-5  rounded-md p-2 h-[400px]">

      <div className='relative border rounded-sm overflow-hidden bg-slate-50 w-full h-[250px]'>
        <Image src={image} alt={'nothing'} className='mix-blend-multiply' fill />
      </div>
      <div className='w-full  h-[130px] justify-between'>
        <div className='w-full h-fit max-h-[30px] flex '>
          <h1 className='font-bold w-5/6'>{foodname || 'foodname'}</h1>
          <h2 className='text-sm w-fit'>{category || 'Category'}</h2>
        </div>
        <div className='w-full  flex flex-col gap-1 text-clip'>
          <h2 className='line-clamp-1'>{nutrition || 'nutrition'}</h2>
          <p className='text-ellipsis line-clamp-2 hyphens-auto '>{ingredients}Lorem ipsum dolor sit amet consectetur adipisicing elit. ?</p>
        </div>
      </div>
    </div>
  )
}
