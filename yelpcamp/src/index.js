import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './components/landing/landing_page';
import SearchPage from './components/search/search_page';
import SignInPage from './components/signin/signin_page';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>} path='/'></Route>
        <Route path='/searchCamp' element={<SearchPage/>}></Route>
        <Route path='/signin' element={<SignInPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
