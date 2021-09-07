import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import FloatBoxName from './Components/FloatBoxName'
import MenuCommon from './Components/MenuCommon'
import MenuVegetarian from './Components/MenuVegetarian'
import SectionSalad from './Components/SectionSalad'
import IconHamburg from './img/icons/menuIcon.png'
import SelectMenu from './Components/SelectMenu'
import Dessert from './Components/Dessert'

import styled from 'styled-components'


function App() {

  const SectionHome = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center; 
    /* background-color: #282c34; */
    min-height: 100vh;
  `

  const NavBar = styled.nav`
    background-color: #212835a6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    width: 100%;

    `

  const Title = styled.h1`
  margin-left: 100px;
    font-size: 25px;
    font-weight: 100;
    padding: 5px;
    color: aliceblue;
    height: 30px;
    border-radius: 5px;
  `

  const Button = styled.button`
    height: 30px;
    width: 40px;
    border: none;
    background-color: transparent;
    border-radius: 5px;
  `


  // const [valueText, setValueText] = useState('');
  var [click, setClick] = useState(0);
  var [hiddenBoxName, setHiddenBoxName] = useState('');


  useEffect(() => {
console.log(hiddenBoxName)
  },[click]);
 


return (
  <SectionHome className="App">
      <NavBar>
        <Button><img src={IconHamburg}/></Button>
        <Title>MorfApp</Title>
      </NavBar>

      {/* <MenuCommon selectMenu={selectMenu} /> */}
      {/* <MenuVegetarian selectMenu={selectMenu} /> */}
      {/* <SectionSalad selectMenu={selectMenu} /> */}
      <BrowserRouter>
      <FloatBoxName hiddenBoxName={hiddenBoxName} setHiddenBoxName={setHiddenBoxName} click={click} setClick={setClick}/>
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
