import React from 'react';
import PizzaMomo from '../../../Data/Img/PizzaMomo.jfif';
import Button from '../../Button/Button';
import { removeItemFromCart } from '../../../Redux/CartCount';

const CardCard = ({data}) => {
  return (
    <>
      <div className="CsubC-Wraper p-4 flex flex-col justify-center items-start gap-2 bg-white border-gray-200 border-2 ">
        <div className=" grid grid-cols-2 items-center gap-4" style={{width:'100%'}}>
          <div className="c-info basis-3/5 flex flex-col flex-nowrap justify-start items-start gap-2" width='50%'>
            <p className="text-xl font-semibold text-start text-black ">
              {data?.name}
            </p>
            <p className="c-detail text-lg font-normal text-justify ">
              {data?.description}
            </p>
            <p className="c-price text-start text-lg font-bold">{data?.price}</p>
          </div>
          <div style={{height:'100px'}}>
            <img src={data?.image} alt="" className="object-scale-down" style={{height:'100%'}} />
          </div>
        </div>
        <Button text={'Remove'} bgColor={'bg-red-500'} data={data.id} action={removeItemFromCart} />
      </div>
    </>
  );
};

export default CardCard;
