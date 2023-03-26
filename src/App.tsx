import { useState } from 'react';
import React  from 'react';

import './App.css';
import { ProductCard } from './ProductCard';

const productArray = [
{
  id:1,
  name: "apple"
},
{
  id:2,
  name: "orange"
},
{
  id:3,
  name: "tomato"
}
]
function App() {
  
  return (
    
      
          <div className="App">
           {/* <ProductCard  productName='orange'/> */}
           {productArray.map(({id,name})=> 
           <ProductCard  productName={name} key = {id}/>
           )}
          </div>
      
      
   
  );
}

export default App;
