import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart/Cart';
import Category from './Pages/Category/Category';
import Home from './Pages/Home/Home';
import SubCategory from './Pages/SubCategory/SubCategory';
import { useDispatch } from 'react-redux';
import { callItems,addToCart, callCartData } from './Redux/CartCount';
function App() {
  const dispatch = useDispatch()

  React.useEffect(()=>{
    dispatch(callItems())
    dispatch(callCartData())
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Category />} />
          <Route path="/category" element={<Category />} />
          <Route path="/:subcategory" element={<SubCategory />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
