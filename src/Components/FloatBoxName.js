import { Title, Button } from '../utils/commons';
import '../App.css';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useEffect, useState } from 'react';

function FloatBoxName() {
    
    var [click, setClick] = useState(0);
    var [hiddenBoxName, setHiddenBoxName] = useState('');
    const [valueText, setValueText] = useState('');

    const FloatBox = styled.section `
    position: absolute;
    top: 200px;
    height: 200px;
    background-color: #212835a6;
    border-radius: 5px;
    margin: 5px;
    padding-bottom: 20px;
    z-index: 10000;
    a {
        text-decoration: none;
        color: #fff;
    }
    `
    const InputText = styled.input `
    margin: 2px;
    color: white;
    height: 30px;
    background-color: transparent;
    border-radius: 10px;
    `
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

    const handleSubmit = (e) => {
        e.preventDefault(e)
        setClick(click++)
        hadleChange(e)
        if (click !== 0) {
            setHiddenBoxName('hidden')
            console.log(hiddenBoxName)
        }
    }

    return (
        <div >
            <FloatBox className={hiddenBoxName}>
                <Title>Cual es tu nombre?</Title>
                <form>
                    <InputText type="text"
                        onChange={hadleChange}
                        placeholder="                Nombre" />
                    <InputText type="text"
                        onChange={hadleChange}
                        placeholder="         Contrasenia kpo" />
                    <Button onClick={handleSubmit}> <Link to={`/selectMenu`}>Aceptar</Link></Button>
                </form>
            </FloatBox>
        </div>

    );
}

export default FloatBoxName;