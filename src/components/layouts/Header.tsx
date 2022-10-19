import React from 'react'
import { Btn } from '../common/Btn'
import './Header.css'

export const Header = () => {
  return (
    <header>
      <h1>
        <strong>Mega</strong> Ads
      </h1>
      <Btn text="Add your add"/>
      <div className="search">
        <input type="text" />
        <Btn text="Search"/>
      </div>
    </header>
  )
}
