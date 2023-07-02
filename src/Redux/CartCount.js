import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const callItems = createAsyncThunk('Items',async ()=>{
  try{
    const data = await axios.get('http://localhost:3001/items')
    return data.data
  }
  catch(err){
    return null
  }
})

export const addToCart = createAsyncThunk('addToCart',async (payload)=>{
  try{
    const data = await axios.post('http://localhost:3001/cart',payload)
    return data.data
  }
  catch(err){
    return null
  }
})

export const callCartData = createAsyncThunk('cart',async ()=>{
  try{
    const data = await axios.get('http://localhost:3001/cart')
    return data.data
  }
  catch(err){
    return null
  }
})

export const removeItemFromCart = createAsyncThunk('removeCartItem',async (id)=>{
  try{
    const data = await axios.delete('http://localhost:3001/cart/'+id)
    return id
  }
  catch(err){
    return null
  }
})

export const cartCount = createSlice({
  name: 'cartitem',
  initialState: {
    value: 0,
    items:[],
    cart:[]
  },
  extraReducers:{
    [callItems.fulfilled]:(state,{payload})=>{
      state.items = payload
    },
    [callCartData.fulfilled]:(state,{payload})=>{
      state.cart = payload
    },
    [addToCart.fulfilled] : (state,{payload})=>{
      state.cart = [...state.cart, payload]
    },
    [removeItemFromCart.fulfilled] : (state,{payload})=>{
      state.cart = state.cart.filter((ele)=> ele.id!==payload )
    }
  }
});

export const selectCount = state => state.cartitem.cart;
export default cartCount.reducer;

// function removerItem () {
//   return {
//     type:'ADD_TO_CART',
//     payload:''
//   }
// }

// dispatchEvent(removeItem)