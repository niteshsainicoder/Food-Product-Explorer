import React from 'react'
import Item from './Item'

function Product() {
    return (
        <div className='w-full h-full flex justify-center flex-col gap-16 items-center py-11'>
            <h1>Products</h1>
            <div id='products' className='w-fit h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            <Item />
                <Item />
                <Item /> <Item />
                <Item />
                <Item /> <Item />
                <Item />
                <Item /> <Item />
                <Item />
                <Item /> <Item />
                <Item />
                <Item />
            </div>  </div >
    )
}

export default Product
