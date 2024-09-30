'use client'
import React, { useEffect, useState } from 'react'
import Item from './Item'
interface itemfile {
    image: string
    foodname: string
    category: string
    nutrition: string
    ingredients: string
}

function Product() {
    const [filter, setfilter] = useState('')
    const [data, setdata] = useState<itemfile[]>()
    const [filterdata, setfilterdata] = useState<itemfile[]>([])

    const dummydata = ([
        {
            image: '/',
            foodname: 'Fresh Garden Salad',
            category: 'Vegetarian',
            nutrition: 'Calories: 150 | Protein: 3g | Carbs: 10g | Fat: 5g',
            ingredients: 'Lettuce, Tomatoes, Cucumber, Olive Oil, Salt, Pepper',
        },
        {
            image: '/',
            foodname: 'Creamy Alfredo Pasta',
            category: 'Italian',
            nutrition: 'Calories: 650 | Protein: 15g | Carbs: 75g | Fat: 30g',
            ingredients: 'Pasta, Cream, Garlic, Parmesan, Olive Oil, Salt, Pepper',
        },
        {
            image: '/',
            foodname: 'Berry Smoothie',
            category: 'Vegan',
            nutrition: 'Calories: 200 | Protein: 2g | Carbs: 40g | Fat: 2g',
            ingredients: 'Blueberries, Strawberries, Almond Milk, Honey, Chia Seeds',
        }
    ]
    )

    const runfilter = () => {
        if (filter == '') {
            console.log(data, 'data');

            if (data) {
                console.log('filter removed', data);

                setfilterdata(data)
            }
            return;
        }
        const datas = data?.filter((item) => item?.category === filter);
        if (datas) {
            setfilterdata(datas)
        }
    }

    useEffect(() => {
        setdata(dummydata)
    }, [dummydata])



    useEffect(() => {
        runfilter();
        console.log(filter, 'filter');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, filter])
    return (
        <div id='products' className='w-full h-full flex justify-center flex-col gap-16 bg-zinc-100 items-center py-11'>
            <div className='flex gap-7'>    <h1 className='font-bold'>Products
                category </h1>
                <select className='w-[70px] overflow-hidden px-2 rounded-md bg-zinc-100 outline outline-1 ' name="category" title='category' id="category" onChange={(e) => setfilter(e.target.value)} defaultValue={''} value={filter}>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Italian">Italian</option>
                </select>
                <button  onClick={() => setfilter('')} type='button' className='px-4 outline outline-1 rounded-md'>remove filter</button>
            </div>
            <div className='w-fit h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>

                {filterdata?.map((items, index) => <Item key={index} image={items.image} foodname={items.foodname} category={items.category} nutrition={items.nutrition} ingredients={items.ingredients} />)}
                {filterdata?.map((items, index) => <Item key={index} image={items.image} foodname={items.foodname} category={items.category} nutrition={items.nutrition} ingredients={items.ingredients} />)}
                {filterdata?.map((items, index) => <Item key={index} image={items.image} foodname={items.foodname} category={items.category} nutrition={items.nutrition} ingredients={items.ingredients} />)}
                {filterdata?.map((items, index) => <Item key={index} image={items.image} foodname={items.foodname} category={items.category} nutrition={items.nutrition} ingredients={items.ingredients} />)}
                {filterdata?.map((items, index) => <Item key={index} image={items.image} foodname={items.foodname} category={items.category} nutrition={items.nutrition} ingredients={items.ingredients} />)}
                {filterdata?.map((items, index) => <Item key={index} image={items.image} foodname={items.foodname} category={items.category} nutrition={items.nutrition} ingredients={items.ingredients} />)}
                {filterdata?.map((items, index) => <Item key={index} image={items.image} foodname={items.foodname} category={items.category} nutrition={items.nutrition} ingredients={items.ingredients} />)}
                {filterdata?.map((items, index) => <Item key={index} image={items.image} foodname={items.foodname} category={items.category} nutrition={items.nutrition} ingredients={items.ingredients} />)}
                {filterdata?.map((items, index) => <Item key={index} image={items.image} foodname={items.foodname} category={items.category} nutrition={items.nutrition} ingredients={items.ingredients} />)}
            </div>  </div >
    )
}

export default Product
