import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExampleList from './comps/Index';
import Chapter6Index1 from './comps/chapter6/Index1';
import Chapter6Index2 from './comps/chapter6/Index2';
import Chapter6Index3 from './comps/chapter6/Index3';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ExampleList />} />
        <Route path='/chapter6/1' element={<Chapter6Index1 />} />
        <Route path='/chapter6/2' element={<Chapter6Index2 />} />
        <Route path='/chapter6/3' element={<Chapter6Index3 />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

