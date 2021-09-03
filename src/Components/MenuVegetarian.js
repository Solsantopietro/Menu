import styled from 'styled-components'
import { SectionMenu, Title, Button } from '../utils/commons';


function MenuVegetarian( {selectMenu} ) {

    return (
        <SectionMenu className="Menu">
          <Title>MENU VEGETARIANO</Title>
          <p>Nombre de la comida</p>

          <Button onClick={selectMenu} >Pedir</Button>
          </SectionMenu>
    );
  }
  
  export default MenuVegetarian;
  