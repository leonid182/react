import React, {useState} from "react"
import './index.css'
import { type } from "os"


interface IProps  {
    productName:string;
}
export const ProductCard = ({productName}:IProps)=>{
   let [count, setCount] = useState(0);
   let [limit, setLimit] = useState(0);
 
    const Add=()=>{
        let stop = document.getElementsByClassName('button-add');
        setCount(count++);
       
      
     }
    const Minus=()=>{
      
        setCount(count--);
       
      
     }
    //const [count, setCount] = useState();
        return(

            <div className="cart-wrapper">
                <span>{productName}</span>
                <div className="button-section">
                    <button onClick={Minus} disabled = {count===0}>Delete</button>
                    <span>{count}</span>
                    <button  onClick={Add} disabled = {count===9} >Add</button>
                </div >
            </div>
        )
}