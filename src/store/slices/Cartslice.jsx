'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const Cartslice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        },
        removeProduct: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        }
    }
})

export const {addProduct, removeProduct} = Cartslice.actions

export default Cartslice.reducer