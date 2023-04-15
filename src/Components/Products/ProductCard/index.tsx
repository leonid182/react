import React, { useState } from 'react';
import "./index.css";
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
//import { getUserName, getUserCount} from "../../../store/userData/selectors"
import { setUserData } from '../../../store/userData';
import { getProducts } from "../../../store/selectors/selectors";
import { addProduct } from '../../../store/products';

interface TProps {
  productName: string;
}


 const Product = ({ productName }: TProps) => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prevValue) => prevValue + 1);
  };

  const deleteCount = () => {
    setCount((prevValue) => prevValue - 1);
  };

  // console.log('PRODUCT CARD RENDER');
 
  const dispatch = useDispatch()
const addProductHandler = ()=>{
  dispatch(addProduct({name:productName, count:count} ))
}

  return (
    <div className="card_wrapper">
      <span>{productName}</span>
      <div className="button_section">
        <button onClick={deleteCount} disabled={count === 0}>
          delete
        </button>
        <span>{count}</span>
        <button onClick={addCount}>add</button>
      </div>
      
      <div>
      <button onClick={addProductHandler}>Добавить в корзину</button>
      <div ></div>
      </div>
    </div>
  );
};

 export const ProductCard = React.memo(Product)


