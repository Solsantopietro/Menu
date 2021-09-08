import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FloatBoxName from './Components/FloatBoxName'
import MenuCommon from './Components/MenuCommon'
import MenuVegetarian from './Components/MenuVegetarian'
import SectionSalad from './Components/SectionSalad'
import IconHamburg from './img/icons/menuIcon.png'
import SelectMenu from './Components/SelectMenu'
import Dessert from './Components/Dessert'
import DropDown from './Components/DropDown'
import styled from 'styled-components'

function App() {

  const SectionHome = styled.section `
    display: flex;
    flex-direction: column;
    text-align: center; 
    min-height: 100vh;
  `

  const NavBar = styled.nav `
    background-color: #212835a6;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 60px;
    width: 100%;
    `

  const Title = styled.h1 `
  margin-left: 170px;
    font-size: 25px;
    font-weight: 100;
    padding: 5px;
    color: aliceblue;
    height: 30px;
    border-radius: 5px;
  `

  const Button = styled.button `
    height: 30px;
    width: 40px;
    border: none;
    background-color: transparent;
    border-radius: 5px;
    cursor: pointer;
  `
  var [closeDrop, setCloseDrop] = useState(true);

  const dropDownClose = () => {
    if(closeDrop) {
      setCloseDrop(false)
    }else {
      setCloseDrop(true)

    }
  }

return (
  <SectionHome className="App">
      <NavBar>
        <Button onClick={dropDownClose} ><img src={IconHamburg}/></Button>
        <Title>MorfApp</Title>
      </NavBar>
      <BrowserRouter>
      <DropDown dropDownClose={dropDownClose} closeDrop={closeDrop} />
        <Switch>
                <Route exact path="/" component={FloatBoxName} />
                <Route exact path="/selectMenu" component={SelectMenu} />
                <Route exact path="/comun" component={MenuCommon} />
                <Route exact path="/postre" component={Dessert} />
                <Route exact path="/veggie" component={MenuVegetarian} />
                <Route exact path="/ensaladas" component={SectionSalad} />

        </ Switch>

      </BrowserRouter>

  </SectionHome>
);
}

  export default App;
