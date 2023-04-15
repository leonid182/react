import React, { useDebugValue}  from 'react';
import { MainPage } from './Containers/MainPage';
import { PostPage } from './Containers/PostsPage';
import styles from "./App.module.scss";
import {Routes, Route} from 'react-router-dom';
import { ContactsPage } from './Containers/ContactPage';
import { Layout } from './Components/Commons/layouts';
import { Auth } from './Containers/AuthPage';
import {routes} from "./utils/constants/routes";
import {CheckOuts} from "./Components/Commons/checkOuts/index"

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
                  <Route path={routes.MAIN} element={<CheckOuts><MainPage/></CheckOuts>}/>
                  <Route path={routes.POSTS} element={<CheckOuts><PostPage/></CheckOuts>}/>
                  <Route path={routes.PRODUCTS} element={<CheckOuts><ContactsPage/></CheckOuts>}/>
                  <Route path={routes.AUTH} element={<Auth/>}/>
                 
                    
                  
                 
              </Routes>
           </Layout>
            
          </div>
      
      
   
  );
};


export default App; 
