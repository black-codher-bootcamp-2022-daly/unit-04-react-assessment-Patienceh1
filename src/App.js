import "./styles/App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import data from "./models/data.json";
import About from "./pages/About";
import Basket from "./components/Basket";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import Container from "./components/Container";

function App() {
  const [products, setProducts] = useState(data);
  const [basket, setBasket] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [removeProduct, setRemoveProduct] = useState(basket);

  function addToBasket(trackId) {
    products.map((product) => {
      if (product.trackId === trackId) {
        product.isInTheBasket = true;
        console.log(product);
        setBasket((prev) => [...prev, product]);
      }
    });
  }

  function removeFromBasket(trackId) {
    const removeFromCart = removeProduct.filter((products)=> products.trackId !== trackId);
    basket.shift(trackId);
    setRemoveProduct(removeFromCart);
    
    // console.log(removeFromCart,basket)
    // products.map((product) => {
    //   if (product.trackId === trackId) {
    //     product.isInTheBasket = false;
    //     console.log(product);
    //     setBasket();
        
    //   }
    // });
  
  }



  console.log(products);

  async function search(value) {
    const url = `https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setProducts(
        results.results.filter(
          (result) =>
            result.trackName &&
            basket.findIndex((product) => result.id === product.trackId) === -1
        )
      );
    }
    // setProducts(results.items);
  }

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          index
          path="/"
          element={
            <Container>
              <Search
                keyword={keyword}
                setKeyword={setKeyword}
                search={search}
              />
              <ProductList
                products={products}
                addToBasket={addToBasket}
                removeFromBasket={removeFromBasket}
              />
            </Container>
          }
        />
        <Route path="/About" element={<About />} />
        <Route
          path="/Basket"
          element={<Basket basket={basket} addToBasket={addToBasket}  removeFromBasket={removeFromBasket}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
