import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';
import { createContext, useState } from 'react';

export const categoryContext = createContext();


function App() {
  const [category,setCategory]= useState('laptop');
  return (
    <categoryContext.Provider value={[category,setCategory]} >
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </categoryContext.Provider>
  );
}

export default App;
