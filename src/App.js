import React, { useState, useEffect } from "react"
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/pizzaBlick/PizzaBlock";
import Sort from "./components/Sort";
import "./scss/app.scss"
import pizzas from './assets/pizzaz'
import Skeleton from "./components/pizzaBlick/Skeleton";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import PizzaContexts from "./context";


export const SearchContext = React.createContext()


function App() {
  const [searchValue, setSearchValue] = useState('')

  return (

    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/basket" element={<Cart />} />
          </Routes>

        </div>
      </SearchContext.Provider>
    </div>

  );
}

export default App;

