import React  from 'react';
import { MainPage } from './Containers/MainPage';
import { PostPage } from './Containers/PostsPage';
import styles from "./App.module.scss";
import {Routes, Route} from 'react-router-dom';
import { ContactsPage } from './Containers/ContactPage';
import { Layout } from './Components/Commons/layouts';

function App() {
  
  return (
    
      
          
            <div className={styles.wrapper}>
           <Layout>
              <Routes>
                  <Route path='/' element={<MainPage/>}/>
                  <Route path='/post'>
                    <Route element={<PostPage/>} index/>
                    <Route path=':id' element={<PostPage/>} index/>
                    <Route path='contacts' element={<ContactsPage/>} />
                  </Route>
                 
              </Routes>
           </Layout>
            
          </div>
      
      
   
  );
};


export default App; 
