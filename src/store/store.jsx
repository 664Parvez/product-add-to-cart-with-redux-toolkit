'use client'

import { configureStore } from "@reduxjs/toolkit"

import Counterslice from "./slices/Counterslice"
import Cartslice from "./slices/Cartslice"

const store = configureStore({
    reducer: {
        counter: Counterslice,
        cart: Cartslice,
    }
})

export default store