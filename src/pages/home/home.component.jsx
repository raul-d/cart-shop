import React, { useState, useEffect } from 'react';

import { ItemList, Sidebar } from '../../components';

import './home.styles.scss';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(res => res.json())
      .then(res => setProducts(res.products))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <Sidebar />
      <div className='items'>
        <ItemList items={products}/>
      </div>
    </div>
  );
};

export default Home;
