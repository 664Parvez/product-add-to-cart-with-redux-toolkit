'use client'

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, removeProduct } from '@/store/slices/Cartslice'

const Product = () => {

    const [product, setProduct] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch("https://api.escuelajs.co/api/v1/products")
            const data = await response.json()
            setProduct(data)
        }

        fetchProduct()
    }, [])

  return (
    <>
        <h2>Products</h2>

        {
            product.map((item, index) => {
                return(
                    <>
                        <div key={index}>
                            <img src={item.category.image} alt="" style={{width: "250px"}} />
                            <h3>{item.title}</h3>
                            <h2>{item.price}</h2>
                            <p>category: {item.category.name}</p>
                            <p>{item.description}</p>
                            <button onClick={() => dispatch(addProduct(item))}>Add to Cart</button>
                        </div>
                    </>
                )
            })
        }
    </>
  )
}

export default Product