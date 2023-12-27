import React from 'react';
import ReactDOM from 'react-dom/client';
import MainTextLand from './components/landing_main_text';
import Landing from './components/landing_page';
import HeadLand from './components/landing_page_head';
import ImgLand from './components/landing_page_img';
import SearchPage from './components/search_page';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>}></Route>
        <Route path='/searchCamp' element={<SearchPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
