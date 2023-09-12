'use client'

import { createSlice } from "@reduxjs/toolkit"

const Counterslice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increament: (state, action) => {
            return state = state + 1
        },
        decrement: (state, action) => {
            if (state <= 0) {
                return state = 0
            }
            return state = state - 1
        }
    }
})

export const { increament, decrement } = Counterslice.actions 
export default Counterslice.reducer