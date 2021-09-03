import './App.css';
import MenuCommon from './Components/MenuCommon'
import MenuVegetarian from './Components/MenuVegetarian'
import SectionSalad from './Components/SectionSalad'
import IconHamburg from './img/menuIcon.png'

import styled from 'styled-components'


function App() {

  const SectionHome = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center; 
    background-color: #282c34;
    min-height: 100vh;

  `

  const NavBar = styled.div`
    background-color: #212835;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    width: 100%;
    `

  const Title = styled.h1`
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
return (
  <SectionHome className="App">
      <NavBar>
        <Button><img src={IconHamburg}/></Button>
        <Title>NombreApp</Title>
      </NavBar>
      <MenuCommon />
      <MenuVegetarian />
      <SectionSalad />
  </SectionHome>
);
}

  export default App;
