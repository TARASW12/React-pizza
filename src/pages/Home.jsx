import React, { useState, useEffect } from 'react';
import Categories from '../components/Categories';

import PizzaBlock from '../components/pizzaBlick/PizzaBlock';
import Sort from '../components/Sort';
import '../scss/app.scss';
import Skeleton from '../components/pizzaBlick/Skeleton';
import { usePizzaContext } from '../context';
import Pagination from '../pagination';
import { useContext } from 'react';
import { SearchContext } from '../App';

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const [filter, setFilter] = useState(0);
  const [sort, setSort] = useState({ name: 'поплярности', sortName: 'raiting' });
  const [activePage, setActivePage] = useState(1);
  // console.log(sort);
  // console.log(filter);
  console.log(items);

  const order = sort.sortName.includes('-') ? 'asc' : 'desc';
  const sortBy = sort.sortName.replace('-', '');
  const search = searchValue ? `search=${searchValue}` : '';
  const zapros = () => {
    fetch(
      `https://635b90beaa7c3f113dc02e54.mockapi.io/items?page=${activePage}&limit=4&${search}${
        filter > 0 ? `category=${filter}` : ''
      }&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setLoader(false);
      });
  };

  useEffect(() => {
    setLoader(true);
    zapros();
    window.scrollTo(0, 0);
  }, [sort, filter, searchValue, activePage]);

  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);
  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  return (
    <div className="container">
      <div className="content__top">
        <Categories setCategories={(i) => setFilter(i)} filter={filter} setLoader={setLoader} />
        <Sort setSort={(i) => setSort(i)} sort={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{loader ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setActivePage(number)} />
    </div>
  );
};

export default Home;
