import React from 'react';
import './App.css'

export const App = () => {
 
  return (
   <>
    <header>
      <h1>
        <strong>Mega</strong> Ads
      </h1>
      <button>Add your add</button>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    </header>
    <div className="map"></div>
   </>
  );
}


