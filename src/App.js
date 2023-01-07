import "./styles/App.css";
import Header from "./components/Header";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import data from "./models/data.json";
import About from "./pages/About";
import Basket from "./components/Basket";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import Container from "./components/Container";
import BasketCount from "./components/BasketCount";

function App() {
  const [products, setProducts] = useState(data);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [term, setTerm] = useState("");
  const [count, setCount] = useState(0);

  function addToBasket(trackId) {
    products.map((product) => {
      if (product.trackId === trackId) {
        product.inBasket = true;
        console.log(product);
        setBasket((prev) => [...prev, product]);

        if (product.trackPrice) {
          setTotal(parseFloat(total + product.trackPrice));
        } else {
          setTotal(total + 0);
        }
      }
      console.log(setTotal);
      setCount(count + 1);
    });
  }

  function removeFromBasket(trackId) {
    const removeFromCart = [];
    basket.filter((products) => {
      if (products.trackId !== trackId) {
        removeFromCart.push(products);
      } else {
        products.trackId = !products.trackId;
        if (products.trackPrice) {
          setTotal(parseFloat(total - products.trackPrice));
        }
      }
    });

    setBasket(removeFromCart);
    setCount(count - 1);
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
      </Container>
    );
  }
  return (
    <Router>
      <div className="App">
        <Header basketCount={count} />
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
