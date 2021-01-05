import React, { useState, useEffect } from 'react';

import { Header, ItemList } from './components';

import './App.css';

function App() {
  const [products, setProduts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(res => res.json())
      .then(res => setProduts(res.products))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <Header />
      <ItemList items={products} />
    </div>
  );
}

export default App;
