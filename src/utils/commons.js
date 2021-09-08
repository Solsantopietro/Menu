import styled from 'styled-components'

export const SectionMenu = styled.section `
margin-top: 20px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background-color: #212835a6;
border-radius: 5px;
margin: 15px;
padding-bottom: 20px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    p{
    color: #fff;
    }
    h3 {
    color: #fff;
    }
`
export const Title = styled.h2 `
font-size: 20px;
padding: 5px;
color: #ffff;
font-weight: 100;
height: 30px;
border-radius: 5px;

`

export const Button = styled.button `
font-size: 15px;
padding: 10px;
border: none;
border-radius: 30px;
color: #ecf0f1;
background-color: #212835;
margin-left: 150px;
margin-top: 20px;
cursor: pointer;
    img{
        width: 30px;
    }
`

export const ButtonBack = styled.img `
position: absolute;
left: 15px;
top: 80px;
font-size: 15px;
padding: 10px;
border: none;
border-radius: 35px;
color: #ecf0f1;
background-color: #212835;
width: 24px;
height: 20px;
margin: 10px;
cursor: pointer;
`


