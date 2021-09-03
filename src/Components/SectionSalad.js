import styled from 'styled-components'
import { SectionMenu, Title, Button } from '../utils/commons';

function SectionSalad() {

const Checkboxs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

    return (
        <SectionMenu  className="Menu">
          <Title>ENSALADA</Title>
          <h3>Ingredientes:</h3>
          <Checkboxs>
            <div>Lechuga<input type="checkbox" /></div> 
            <div>Tomate<input type="checkbox" /></div> 
            <div>Zanahoria<input type="checkbox" /></div> 
            <div>Arroz<input type="checkbox" /></div> 
            <div>Pollo<input type="checkbox" /></div> 
            <div>Jamon<input type="checkbox" /></div> 
            <div>Queso<input type="checkbox" /></div> 
            <div>Repollo<input type="checkbox" /></div> 
            <div>Brocoli<input type="checkbox" /></div> 
            <div>Chauchas<input type="checkbox" /></div> 
            <div>Choclo<input type="checkbox" /></div> 
            <div>Remolacha<input type="checkbox" /></div> 
          </Checkboxs>

          <Button>Pedir</Button>
          </SectionMenu>
    );
  }
  
  export default SectionSalad;
  