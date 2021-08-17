import { createSlice, configureStore, } from '@reduxjs/toolkit'
const initialState = { isLoggedIn: false,sessionExpires: false }
const authSlice = createSlice({
    name: 'auth',
    initialState ,
    reducers: {
        login(state, action) {
              state.isLoggedIn = true
        },
        logout(state){
            state.isLoggedIn = false
        },
        sessionExpires(state){
        state.sessionExpires=true
        }
    }
})

export const store = configureStore({
    reducer: { auth: authSlice.reducer }
})
export const authActions = authSlice.actions
export default store