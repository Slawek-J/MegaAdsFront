import React, { useState } from 'react';
import { AddForm } from './components/AddForm/AddForm';
// import './App.css'
import { Header } from './components/layouts/Header';
import {Map} from './components/Map/Map'
import { SearchContext } from './context/search.context';
import { Routes, Route} from 'react-router-dom'


export const App = () => {
 
  const [search, setSearch] = useState('');

  return (
   <>
   <SearchContext.Provider value={{search, setSearch}}>
    <Header/>
    <Routes>
      <Route path="/" element={<Map />}/>
      <Route path="/add" element={<AddForm />}/>
    </Routes>
  </SearchContext.Provider>
   </>
  );
}


