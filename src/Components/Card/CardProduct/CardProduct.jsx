import React from 'react';
import Button from '../../Button/Button';
import { addToCart } from '../../../Redux/CartCount';

const CardProduct = ({data}) => {
  return (
    <>
      <div className="CsubC-Wraper p-4 flex flex-col justify-center items-start gap-2 bg-white border-gray-200 border-2 ">
        <div className="Csub-title p-0 m-0">
          <p className="text-xl font-semibold text-start text-black ">
            {data?.name}
          </p>
        </div>
        <div className="Csub-content flex flex-row flex-wrap justify-start items-center gap-4 ">
          <div className="c-info basis-3/5 flex flex-col flex-nowrap justify-start items-start gap-2">
            <p className="c-price text-start text-md font-normal">{data?.price}</p>
            <p className="c-detail text-lg font-normal text-justify ">
              {data?.description}
            </p>
          </div>
          <div className="c-img" style={{height:'100px', width:'100px'}}>
            <img src={data?.image} alt="" className="w-max"/>
          </div>
        </div>
        {/* <button onClick={() => dispatch()}>Add to Cart</button> */}
        <Button
          text={'Add To Cart'}
          bgColor={'bg-red-500'}
          data={data}
          action={addToCart}
        />
      </div>
    </>
  );
};

export default CardProduct;
