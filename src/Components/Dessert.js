import styled from 'styled-components'
import { Title, Button, ButtonBack } from '../utils/commons';
import { Link } from 'react-router-dom'
import IconX from '../img/icons/iconXRed.png'
import Check from '../img/icons/checkGreen.png'

function Dessert({ selectMenu }) {

    const SectionDessert = styled.section`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #212835a6;
    border-radius: 150px;
    margin: 35px;
    padding: 50px;
    color: #fff;
    img{
        cursor: pointer;
        width: 40px;
        margin: 10px;
    }
    `

    const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    `

    return (
        <SectionDessert className="Menu">
            <Title>QUERES POSTRE?</Title>
            <p>Nombre del postre</p>
            <Buttons>
                <img onClick={selectMenu} src={Check} />
                <img onClick={selectMenu} src={IconX} />
            </Buttons>
        </SectionDessert>
    );
}

export default Dessert;
