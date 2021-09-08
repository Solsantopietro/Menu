import { SectionMenu, Title, Button, ButtonBack } from '../utils/commons';
import IconBack from '../img/icons/iconBack.png'
import { Link } from 'react-router-dom'

function MenuCommon({ selectMenu }) {

  return (
    <>
      <Link to={`/selectMenu`}><ButtonBack src={IconBack} /></Link>
      <SectionMenu className="Menu">
        <Title>MENU COMUN</Title>
        <p>Nombre de la comida</p>
        <Link to={`/postre`}><Button onClick={selectMenu}>Pedir</Button></Link>
      </SectionMenu>
    </>
  );
}

export default MenuCommon;
