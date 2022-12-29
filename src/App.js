import './styles/App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import { useState } from 'react';
import data from './models/data.json';
import About from './About';
import Basket from './Basket';








function App() {


  const [product, setProduct] = useState(data);



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={ 
  
          <Product />
        }/>
        <Route path="/About" element={<About />}/>
        <Route path="/Basket" element={<Basket />}/>
      
      </Routes>
    </div>
  );
}

export default App;
