import React, { useEffect, useState } from 'react';
import { CustomInput } from '../../Commons/custom_input';
import styles from './AuthForm.module.scss';

export const AuthForm = () => {

  const [formstate, setformstate]=useState({
    email:'',
    password:''
    
    
  })

  const [isError, setIsError]= useState(false);

  const handleChangeFieldForm = (fieldName:string)=>(e:React.ChangeEvent<HTMLInputElement>)=>{
      setformstate((prevValues)=>({...prevValues, [fieldName]:e.target.value }))
  };


  const handleFinishFieldForm = ()=>{
    if(formstate.password.length<5){
      setIsError(true)
    }else{
    console.log('Auth');
  }
    
  };

  useEffect(()=>{
    if(formstate.password.length>5&& isError ){
      setIsError(false)
    }
  },[formstate.password])

  return (
    <div>
      <CustomInput
        fieldLabel="Email" 
        fieldName='email'  
        value={formstate.email}
        type="email"
        handleChangeFieldForm={handleChangeFieldForm}
            
      />
      <CustomInput
        fieldLabel="Password"
        fieldName="password"
        value={formstate.password}
        type="password"
        handleChangeFieldForm={handleChangeFieldForm}
      />
      <span className={`${styles.errorTitle} ${isError? styles.hasError:styles.noError}`}>Пароль меньше 5 символов надо</span>
      <button onClick={handleFinishFieldForm}>Auth</button>
    </div>
  );
};
