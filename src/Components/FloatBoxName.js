import { Title, Button } from '../utils/commons';
import '../App.css';

import styled from 'styled-components'
import { useEffect, useState } from 'react';

function FloatBoxName( {click, setClick} ) {


    const FloatBox = styled.section`
    position: absolute;
    top: 200px;
    height: 200px;
    background-color: #212835a6;
    border-radius: 5px;
    margin: 5px;
    padding-bottom: 20px;
    z-index: 10000;

    `

    const InputText = styled.input`
    color: white;
    height: 30px;
    background-color: transparent;

    border-radius: 10px;
    `
    const [valueText, setValueText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(e)
        setClick(click++)
        hadleChange(e)
    }

    const hadleChange = (e) => {
        setValueText(e.target.value)
        if (valueText === 'sol') {
            console.log('es igual');
            console.log(valueText)

        } else {
            console.log('nonon');
            console.log(click)
        }

    }

    return (
        <div >
            <FloatBox className={click >= 1 ? "hidden" : ""}>
                <Title>Cual es tu nombre?</Title>
                <form>
                    <InputText type="text"
                        onChange={hadleChange}
                        placeholder="                Nombre" />
                    <Button onClick={handleSubmit}>Aceptar</Button>
                </form>
            </FloatBox>
        </div>

    );
}

export default FloatBoxName;