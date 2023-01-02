import './styles/App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import { useState } from 'react';
import data from './models/data.json';
import About from './pages/About';
import Basket from './components/Basket';
import ProductList from './components/ProductList';








function App() {


  const [products, setProduct] = useState(data);
  const [basket, setBasket] = useState([]);


  function addToBasket (trackId) {
    products.map((product) => {
      if(product.trackId === trackId)
      { 
        console.log(product)
        setBasket(prev => [...prev,product])
        
      }
    })
    
    // const  newBasket = basket;
    // newBasket.push(products);
    // setBasket(newBasket);
    // console.log({newBasket, basket});
// console.log(products)
  }


  return (
    <div className="App">
     
      <Header />
      <Routes>
        <Route index path="/" element={ 
          <>
          
            <ProductList
            products={products}
              addToBasket={addToBasket}
              // removeFromBasket={}
            />
        
       
       </>
        }/>
        <Route path="/About" element={<About />}/>
        <Route path="/Basket" element={<Basket basket={basket} addToBasket={addToBasket}/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
