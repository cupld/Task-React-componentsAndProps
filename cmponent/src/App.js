import React from 'react'
import './App.css';
import Home from './Home';
import data from './Products';
import product from './Productfile';



function App() {
  const products1 = data.map((product) => <product productData={product} />);
  return (
    <div className='App'>
      <Home />
      {products1}
      </div>
  );
}

export default App;
