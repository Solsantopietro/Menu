import styled from 'styled-components'
import { SectionMenu, Title, Button } from '../utils/commons';
import { useState } from 'react';

function SectionSalad( {selectMenu} ) {

  const [valueInput, setValueInput] = useState();

const Checkboxs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

var ingredients = [];
const handleCheckbox = () => {
  if(document.getElementById('checkboxSalad').checked){
    console.log('checkeado');
  }else{
    console.log('no')
  }
}



    return (
        <SectionMenu  className="Menu">
          <Title>ENSALADA</Title>
          <h3>Ingredientes:</h3>
          <Checkboxs>
            <div>Lechuga<input type="checkbox" id="checkboxSalad" onChange={handleCheckbox} value="lechuga" /></div> 
            <div>Tomate<input type="checkbox" id="checkboxSalad" onChange={handleCheckbox} value="tomate" /></div> 
            <div>Zanahoria<input type="checkbox" id="checkboxSalad" onChange={handleCheckbox} value="zanahoria" /></div> 
            <div>Arroz<input type="checkbox" id="checkboxSalad" onChange={handleCheckbox} value="arroz" /></div> 
            <div>Pollo<input type="checkbox" id="checkboxSalad" onChange={handleCheckbox} value="pollo" /></div> 
            <div>Jamon<input type="checkbox" id="checkboxSalad" onChange={handleCheckbox} value="jamon" /></div> 
            <div>Queso<input type="checkbox" id="checkboxSalad" onChange={handleCheckbox} value="queso" /></div> 
            <div>Repollo<input type="checkbox" id="checkboxSalad" onChange={handleCheckbox} value="repollo" /></div> 
            <div>Brocoli<input type="checkbox" id="checkboxSalad" onChange={handleCheckbox} value="brocoli" /></div> 
            <div>Chauchas<input type="checkbox" id="checkboxSalad" onChange={handleCheckbox} value="chauchas" /></div> 
            <div>Choclo<input type="checkbox" id="checkboxSalad" onChange={handleCheckbox} value="choclo" /></div> 
            <div>Remolacha<input type="checkbox" id="checkboxSalad" onChange={handleCheckbox} value="remolacha" /></div> 
          </Checkboxs>

          <Button onClick={selectMenu} >Pedir</Button>
          </SectionMenu>
    );
  }
  
  export default SectionSalad;
  