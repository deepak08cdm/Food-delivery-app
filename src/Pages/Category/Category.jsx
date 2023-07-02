import React from 'react';
import CardCategory from '../../Components/Card/CardCategory/CardCategory';
import Pizza from '../../Data/Img/Pizza.png';
import Burger from '../../Data/Img/Burger.png';
import { Link } from 'react-router-dom';
import {callItems} from '../../Redux/CartCount'
import { useDispatch, useSelector } from 'react-redux';

const Category = () => {
  const {cartitem:{items}} = useSelector((state)=>state)
  return (
    <>
      <div className="c-wraper grid grid-cols-Category justify-center  justify-items-center m-auto mt-6 p-4">

        {items.map((ele,index)=>{
          return(
            <Link to={`/${ele.name.toLowerCase()}`} className="w-max" key={index}>
              <CardCategory img={ele.image} title={ele.name}/>
            </Link>
          )
        })}
      </div>
    </>
  );
};

export default Category;


// we will be using redux to call data on first render