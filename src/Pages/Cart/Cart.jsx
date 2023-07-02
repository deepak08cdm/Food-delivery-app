import React from 'react';
import CardCard from '../../Components/Card/CardCart/CardCard';
import { useSelector } from 'react-redux';

const Cart = () => {
  const {cart} = useSelector(state=> state.cartitem)
  return (
    <>
      <div className="text-3xl p-2 font-semibold">You Have Orderd:</div>
      {
        cart.map((ele,index)=>{
          return(
            <>
              <CardCard data={ele} key={index} />
            </>
          )
        })
      }
    </>
  );
};

export default Cart;
