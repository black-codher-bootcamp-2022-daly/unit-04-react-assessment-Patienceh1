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
              // addToBasket={}
              // removeFromBasket={}
            />
          ))}
       
       </>
        }/>
        <Route path="/About" element={<About />}/>
        <Route path="/Basket" element={<Basket />}/>
      
      </Routes>
    </div>
  );
}

export default App;
