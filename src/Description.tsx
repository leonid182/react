import React from 'react';
type TProps = {
    init : {
        id: string,
        link: string
      },
      name:string

}
export const Description = ({init, name} :TProps) => {
    alert(init.id);
    
  return(
    
  <>
    <p>
      {`${init.id} - самый простой счет`}
    </p>
    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      {`изучай реакт вместе с ${name}`}
    </a>
    
  </>
   
  )
  
};
