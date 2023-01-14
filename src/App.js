import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "./models/data.json";
import About from "./pages/About";
import Basket from "./components/Basket";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import Container from "./components/Container";
import BasketCount from "./components/BasketCount";

function App() {
  const [products, setProducts] = useState(data.slice(0, 10));
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [term, setTerm] = useState("");
  const [count, setCount] = useState(0);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  function getData(currentCount) {
    if (currentCount === data.length - 10) setLoadMoreVisible(false);
    return setProducts((currentProducts) => [
      ...currentProducts,
      ...data.slice(currentCount, currentCount + 10),
    ]);
  }

  useEffect(() => {
    // console.log("Someone Typed event =>", term);
  }, [term]);

  function addToBasket(trackId) {
    products.forEach((product) => {
      if (product.trackId === trackId) {
        product.inBasket = true;
        // console.log(product);
        setBasket((prev) => [...prev, product]);

        if (product.trackPrice) {
          setTotal(parseFloat(total + product.trackPrice));
        } else {
          setTotal(total + 0);
        }
      }
      // console.log(setTotal);
      setCount(count + 1);
    });
  }

  function removeFromBasket(trackId) {
    const removeFromCart = [];
    basket.forEach((products) => {
      if (products.trackId !== trackId) {
        removeFromCart.push(products);
      } else {
        products.inBasket = !products.inBasket;
        if (products.trackPrice) {
          setTotal(parseFloat(total - products.trackPrice));
        }
        return products;
      }
    });

    setBasket(removeFromCart);
    setCount(count - 1);
  }

  async function search(value) {
    const results = await fetch(`https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`).then((res) => res.json());
    if (!results.error) {
      setProducts(
        results.results.filter(
          (result) =>
            result.trackName &&
            basket.findIndex((product) => result.id === product.trackId) === -1
        )
      );
    }
  }

  function BasketList() {
    return (
      <>
        <BasketCount />
        <Basket
          basket={basket}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          basketTotal={total}
          basketCount={count}
        />
      </>
    );
  }

  function Home() {
    return (
      <Container>
        <Search term={term} setTerm={setTerm} search={search} />
        <ProductList
          items={products}
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          itemCount={data.length}
        />
        {loadMoreVisible && (
          <button
            className="load-more-button"
            onClick={() => getData(products.length)}
          >
            Load More Products
          </button>
        )}
      </Container>
    );
  }
  return (
    <Router>
      <div className="App">
        <Header itemCount={count} />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/basket" element={<BasketList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
