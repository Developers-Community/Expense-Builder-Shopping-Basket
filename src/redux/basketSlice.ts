import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductItem } from "global"
import { INITIAL_STATE } from "./state"

const basketSlice = createSlice({
    name: " Shopping basket",
    initialState: INITIAL_STATE,
    reducers: {
        addToBasket: (state: ProductItem[], { payload }: PayloadAction<ProductItem>) => {
            return state.map(itm => {
                if (itm.id !== payload.id) {
                    return itm
                }
                return {
                    ...itm,
                    added: true
                }
            })
        },
        removeToBasket: (state: ProductItem[], action) => {
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

export const { addToBasket, removeToBasket } = basketSlice.actions
export default basketSlice.reducer
















// const fetchUserById = createAsyncThunk<any>(
//     'usersData',
//     async (value, thunkAPI) => {
//         const response = await Axios.get("/users")
//         const data = await response.data
//         return data
//     }
// )

// console.log(fetchUserById())



// export const basket = basketSlice.reducer
// export const basketReducer = basketSlice.reducer
                        // extraReducers: {
                        //     [fetchUserById.fulfilled]: (state) => {
                        //         state
                        //     }