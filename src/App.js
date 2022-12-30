import './styles/App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import { useState } from 'react';
import data from './models/data.json';
import About from './pages/About';
import Basket from './components/Basket';








function App() {


  const [products, setProduct] = useState(data);
  const [basket, setBasket] = useState([0]);


  function addToBasket (products) {
    const  newBasket = basket;
    newBasket.push(products);
    setBasket(newBasket);
    console.log({newBasket, basket});

  }


  return (
    <div className="App">
     
      <Header />
      <Routes>
        <Route index path="/" element={ 
          <>
          {products.map((products) => (
            <Product
            // handleClick={addBook}
            //       onClick={() => addBookToCart(book)}
              id={products.artistId}
              product={products}
              key={products.trackId}
              kind={products.kind}
              name={products.trackName}
              thumbnail={products.artworkUrl100}
              price={products.trackPrice}
              addToBasket={()=>addToBasket(products)}
              // removeFromBasket={}
            />
          ))}
       
       </>
        }/>
        <Route path="/About" element={<About />}/>
        <Route path="/Basket" element={<Basket basket={basket} addToBasket={addToBasket}/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
