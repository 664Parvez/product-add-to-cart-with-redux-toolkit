'use client'

import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import { increament, decrement } from "../store/slices/Counterslice"

const Counter = () => {

    const dispatch = useDispatch()

    const counterNumber = useSelector((state) => state.counter)

  return (
    <div>
        <button onClick={() => dispatch(increament())}><h1>+</h1></button>
        <h1>{counterNumber}</h1>
        <button onClick={() => dispatch(decrement())}><h1>-</h1></button>
    </div>
  )
}

export default Counter