import { Title, Button } from '../utils/commons';
import styled from 'styled-components'
import { useState } from 'react';

function FloatBoxName(){
  const [valueText, setValueText] = useState('');

    const FloatBox = styled.section`
    background-color: #ecf0f1;
    border-radius: 5px;
    margin: 5px;
    padding-bottom: 20px;
    `    
    const handleChange = (e) => {
        e.preventDefault(e)

        setValueText(e.target.value)
        console.log(valueText)
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
        handleChange(e)
        console.log('hola')
    }

 return(
     <FloatBox className="FloatBoxName">
        <Title>Cual es tu nombre?</Title>
        <input type="text"
            onChange={handleChange}
            placeholder="                Nombre" />
        <Button onClick={handleSubmit}>Aceptar</Button>
     </FloatBox>
 );
}

export default FloatBoxName;