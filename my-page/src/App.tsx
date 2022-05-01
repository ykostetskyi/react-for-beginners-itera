import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer } from './Contacts'
import { P } from './Bio'

const Me = {
  firstName: "Slawa",
  shortBiography: "Love travel, hiking, sport & music",
  publicContacts: "slavacoste@gmail.com"
}

const App = () => (
  <div className="App">
    <h1> HI! I'm {Me.firstName} </h1>
    <P copyright = {Me.shortBiography}/>
    <Footer copyright = {Me.publicContacts}/>
     </div>
  )  

export default App;
