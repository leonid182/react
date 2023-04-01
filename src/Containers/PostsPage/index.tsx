import React from "react";
import { Header } from "../../Components/Commons/Header";
import { Footer } from "../../Components/Commons/Footer";
import { PostCard } from "../../Components/Posts/PostCard";

export const PostPage =()=>{
    return <div>
        <Header/>
        <span>PostPage</span>
        <PostCard/>
        <Footer/>
    </div>
}