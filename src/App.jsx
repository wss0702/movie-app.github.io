// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header/Header';

import WishlistPage from './components/MovieWishlist/MovieWishlist';
import { BaseService } from './client';

const fetchData = async () => {
  const response = await BaseService.RetrieveApiData('/discover/movie', 'GET') // API 호출 방법.
  return response;
}  

function App() {
  const response = fetchData();


  return (
    <div>
      <Routes>
        <Route path="/" element={<><Header /><div>hello world!</div></>} />
        <Route path="/wishlist" element={<><Header /><WishlistPage /></>} />
      </Routes>
    </div>
  );
}

export default App;
