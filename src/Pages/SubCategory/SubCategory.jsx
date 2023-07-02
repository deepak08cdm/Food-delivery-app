import React, { useEffect, useState } from 'react';
import CardProduct from '../../Components/Card/CardProduct/CardProduct';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SubCategory = () => {
  const [subItems, setSubItems] = useState([])
  const [title, setTitle] = useState('')
  const {subcategory} = useParams()
  const {cartitem:{items}} = useSelector((state)=>state)
  useEffect(()=>{
    const data = items.find((ele)=> ele.name.toLowerCase()==subcategory)
    if(data){
    setTitle(data.subItemsData.name)
    setSubItems(data.subItemsData.subItems)
    }
  },[items])
  return (
    <>
      <div className="sub-c-wraper flex flex-col justify-center items-center gap-2 shadow-md text-3xl  font-semibold w-4/5 m-auto">
        <div className="subC-title">{title}</div>
        {
          subItems.length>0 &&subItems?.map((ele,index)=>{
            return(
              <CardProduct data={ele} key={index}/>
            )
          })
        }
      </div>
    </>
  );
};

export default SubCategory;
