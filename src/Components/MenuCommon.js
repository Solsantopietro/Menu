import styled from 'styled-components'
import { SectionMenu, Title, Button } from '../utils/commons';


function MenuCommon() {

    return (
        <SectionMenu className="Menu">
          <Title>MENU COMUN</Title>
          <p>Nombre de la comida</p>
          <Button>Pedir</Button>
          </SectionMenu>
    );
  }
  
  export default MenuCommon;
  