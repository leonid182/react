import React, { useEffect, useState } from 'react';
import { CustomInput } from '../../Commons/custom_input';
import styles from './AuthForm.module.scss';

export const AuthForm = () => {

  const [formstate, setformstate]=useState({
    email:'',
    password:''
  })

  const handleChangeFieldForm = (fieldName:string)=>(e:React.ChangeEvent<HTMLInputElement>)=>{

  }


  return (
    <div>
      <CustomInput
        fieldLabel="Email" 
        fieldName='Email'  
        value='' 
            
      />
      <CustomInput
        fieldLabel="Password"
        fieldName="password"
        value=''
        type="password"
        
      />
      
    </div>
  );
};
