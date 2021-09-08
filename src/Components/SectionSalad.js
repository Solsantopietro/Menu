import styled from 'styled-components'
import { SectionMenu, Title, Button, ButtonBack } from '../utils/commons';
import { useState } from 'react';
import IconBack from '../img/icons/iconBack.png'
import { Link } from 'react-router-dom'

function SectionSalad({ selectMenu }) {

  const [valueInput, setValueInput] = useState();

  const Checkboxs = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: space-between;
    color: #fff;
    width: 200px;
  }
  input {
    width: 20px;
    height: 20px;
  }

`

  var ingredients = ['Lechuga', 'Tomate', 'Zanahoria', 'Arroz', 'Pollo', 'Jamon', 'Queso', 'Repollo', 'Brocoli', 'Chauchas', 'Choclo', 'Remolacha'];
  const handleCheckbox = () => {
    ingredients.filter(ingredient => {
      if (ingredient === 'Lechuga') {
        console.log(ingredient, 'si')
      } else {
        console.log(ingredient, 'no')
      }
    })
    
  }

  return (
    <>
      <Link to={`/selectMenu`}><ButtonBack src={IconBack} /></Link>
      <SectionMenu className="Menu">
        <Title>ENSALADA</Title>
        <h3>Ingredientes:</h3>
        <Checkboxs>
          {ingredients.map(ingredient => 
            <div>{ingredient}<input 
                type="checkbox" 
                id="checkboxSalad" 
                onChange={handleCheckbox} 
                name={ingredient} />
            </div>
          )}
        </Checkboxs>
        <Link to={`/postre`}><Button onClick={selectMenu}>Pedir</Button></Link>
      </SectionMenu>
    </>
  );
}

export default SectionSalad;
