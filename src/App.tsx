import React, { useDebugValue}  from 'react';
import { MainPage } from './Containers/MainPage';
import { PostPage } from './Containers/PostsPage';
import styles from "./App.module.scss";
import {Routes, Route} from 'react-router-dom';
import { ContactsPage } from './Containers/ContactPage';
import { Layout } from './Components/Commons/layouts';
import { log } from 'console';

function App() {
  console.log('APP RENDER');
//   useEffect(()=>{console.log("COMPONENTDIDMOUNT APP");
//   return ()=>{
//     console.log("COMPONENT WILL UNMOUNT APp");
    
// }
//   }, []);
  return (
    
      
          
            <div className={styles.wrapper}>
           <Layout>
              <Routes>
                  <Route path='/' element={<MainPage/>}/>
                  <Route path='/post' element={<PostPage/>}/>
                  <Route path='/contacts' element={<ContactsPage/>}/>
                 
                    
                  
                 
              </Routes>
           </Layout>
            
          </div>
      
      
   
  );
};


export default App; 
