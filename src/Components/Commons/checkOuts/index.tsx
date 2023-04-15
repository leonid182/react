import React, { Children } from "react";
import { useSelector } from "react-redux";
import { getUserToken } from "../../../store/userData/selectors";
import { Navigate } from "react-router-dom";
import { routes } from "../../../utils/constants/routes";

interface IProps {
    children :React.ReactElement;
}
export const CheckOuts :any = ({children}:IProps)=>{
    const token = useSelector(getUserToken);

    if(!token){
        return <Navigate to={routes.AUTH}/>;
    }else{
        <>{children}</>
    }
}