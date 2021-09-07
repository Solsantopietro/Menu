import styled from 'styled-components'
import '../App.css';

import { Link } from "react-router-dom";
import { SectionMenu, Title, Button } from '../utils/commons';
import IconVeggie from '../img/icons/veggieIcon.png'
import IconCommon from '../img/icons/commonIcon.png'
import IconSalad from '../img/icons/saladIcon.png'

function SelectMenu({}) {

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
      a {
        text-decoration: none;
        color: #fff;

      }
    `
    return (
        <div className="Menu">
            <Link to={`/comun`} className="common"><ButtonMenu><img src={IconCommon} />Comun</ButtonMenu></Link>
            <Link to={`/veggie`} className="veggie"><ButtonMenu><img src={IconVeggie} />Veggie</ButtonMenu></Link>
            <Link to={`/ensaladas`} className="salad"><ButtonMenu><img src={IconSalad} />Ensaladas</ButtonMenu></Link>

        </div>
    );
}

export default SelectMenu;
