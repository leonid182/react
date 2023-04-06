import React,{useEffect} from "react";
import { Header } from "../../Components/Commons/Header";
import { Footer } from "../../Components/Commons/Footer";
import { PostCard } from "../../Components/Posts/PostCard";
import styles from "./PostPage.module.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CustomInput } from "../../Components/Commons/custom_input";
import { ProductCard } from "../../Components/Products/ProductCard";


export const PostPage =()=>{

    const  params = useParams();
    const  location = useLocation();
    const navigation = useNavigate();
    console.log(navigation);
    const back=()=>{
        navigation(-1);
    }
    const forward=()=>{
        navigation(+1);
    }
//     useEffect(()=>{console.log("COMPONENTDIDMOUNT APP");
//   }, []);
    return (
        
    <div className={styles.postPageWrapper}>
        <div className={styles.postPageAll}>
            
            
            <div className={styles.postList}>
                <PostCard/>
                
             
               
                
                
                </div>

               
            
        </div>
       
   </div>
    )
}