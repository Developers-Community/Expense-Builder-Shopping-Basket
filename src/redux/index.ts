
import { createSlice, configureStore } from "@reduxjs/toolkit"
import { INITIAL_STATE } from "./state"
// import {addToBasket}from "./reducers"

const basketSlice = createSlice({
    name: " Shopping basket",
    initialState: INITIAL_STATE,
    reducers: {
        addToBasket: (state, action) => {
            return state.map(itm => {
                if (itm.id !== action.payload.id) {
                    return itm
                }
                return {
                    ...itm,
                    added: true
                }
            })
        },
        removeToBasket: (state, action) => {
            return state.map(itm => {
                if (itm.id !== action.payload.id) {
                    return itm
                }
                return {
                    ...itm,
                    added: false
                }
            })
        }
    }

})


const store = configureStore({ reducer: basketSlice.reducer })
export const { addToBasket, removeToBasket } = basketSlice.actions
export { basketSlice, store }