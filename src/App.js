import './App.css';
import React, { useEffect, useState } from 'react';
import FloatBoxName from './Components/FloatBoxName'
import MenuCommon from './Components/MenuCommon'
import MenuVegetarian from './Components/MenuVegetarian'
import SectionSalad from './Components/SectionSalad'
import IconHamburg from './img/menuIcon.png'
import IconVeggie from './img/veggieIcon.png'
import noPork from './img/noPork.png'

import IconCommon from './img/commonIcon.png'
import IconSalad from './img/saladIcon.png'

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
  const ButtonMenu = styled.button`
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
   height: 140px;
    width: 140px;
    font-weight: 600;
    border-color: none;
    color: #ffff;
    background-color: #212835a6;
    border-radius: 70px;
  `
  var menu = 0;
  const selectMenu = () =>{
    if(menu == 0){
      console.log('si')
    }
  }

  // const [valueText, setValueText] = useState('');
  var [click, setClick] = useState(0);

 

return (
  <SectionHome className="App">
      <NavBar>
        <Button><img src={IconHamburg}/></Button>
        <Title>MorfApp</Title>
      </NavBar>
      <FloatBoxName click={click} setClick={setClick}/>

      {/* <MenuCommon selectMenu={selectMenu} />
      <MenuVegetarian selectMenu={selectMenu} />
      <SectionSalad selectMenu={selectMenu} /> */}
    
      <ButtonMenu className={click === 0 ? "hidden" : "common"}><img src={IconCommon}/>Comun</ButtonMenu>
      <ButtonMenu className={click === 0 ? "hidden" : "veggie"} ><img src={IconVeggie}/>Veggie</ButtonMenu>
      <ButtonMenu className={click === 0 ? "hidden" : "salad"}><img src={IconSalad}/>Ensaladas</ButtonMenu>


  </SectionHome>
);
}

  export default App;
