'use client'

import React from 'react'
import Link from 'next/link'

import { useSelector } from 'react-redux'

const Navbar = () => {

  const itemsCount = useSelector((state) => state.cart)

  return (
    <>
        <ul>
          <li style={{display: "inline-block"}}><Link href="/">Home</Link></li>
          <li style={{display: "inline-block"}}><Link href="/about"> - About</Link></li>
          <li style={{display: "inline-block"}}><Link href="/product"> - Product</Link></li>
          <li style={{display: "inline-block"}}><Link href="/contact"> - Contact</Link></li>
          <li style={{display: "inline-block"}}><Link href="/cart"> - Cart</Link></li>
          <li><h3 style={{textAlign: "center",}}>Cart Items: {itemsCount.length}</h3>
            <div style={{border: "1px solid #000000", padding: "10px"}}>
              <h4>Products</h4>
            </div>
          </li>  
        </ul>
    </>
  )
}

export default Navbar