'use client'

import React from 'react'

import { useSelector, useDispatch } from "react-redux"
import { removeProduct } from '@/store/slices/Cartslice'

const Cart = () => {

    const dispatch = useDispatch()

    const cartProduct = useSelector((state) => state.cart)

  return (
    <div>
        {
            cartProduct.map((item) => {
              return (
                <>
                  <div style={{margin: "20px", border: "1px solid #000000"}}>
                    <img src={item.category.image} alt="" style={{width: "200px"}} />
                    <h2>{item.title}</h2>
                    <h2>{item.price}</h2>
                    <button onClick={() => dispatch(removeProduct(item.id))}>Remove</button>
                  </div>
                </>
              )
            })
        }
    </div>
  )
}

export default Cart