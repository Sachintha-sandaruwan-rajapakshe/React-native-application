import {createContext,useState} from 'react';

const CounterContext =createContext();

const CounterProvider=({children})=>{
  const [clients,SetClients]=useState([]);

  const addClient=(client)=>{
    SetClients((prevClients)=>[...prevClients,client])
  }
  return(
    <CounterContext.Provider value={{clients,addClient}}>
      {children}
    </CounterContext.Provider>
  )

}
export {CounterProvider , CounterContext};