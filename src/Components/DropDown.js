import styled from 'styled-components'
import '../App.css';
import { Link } from 'react-router-dom'


function DropDown({closeDrop, dropDownClose}) {

    const DropDown = styled.section `
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    background-color: #212835c4;
    width: 250px;
    height: 100%;
    z-index: 9999999999;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    a {
        text-decoration: none;
    }
    p {
        color: #fff;
        position: absolute;
        left: 200px;
        bottom: 50px;
    }
    button {
        display: flex;
        align-items: center;
        padding-left: 10px;
        margin-top: 2px;
        background-color: #212835a6;
        width: 250px;
        height: 60px;
        z-index: 9999999999;
        color: #fff;
        cursor: pointer;
        border: none;
        font-size: 15px;
    }
    `
return(
    <DropDown className={closeDrop ? 'hidden' : ''}>
        <Link to={'/'}><button onClick={dropDownClose}>Usuario de Administracion</button></Link>
        <Link to={'/'}><button onClick={dropDownClose}>Usuario</button></Link>
    </DropDown>
);
}

export default DropDown;