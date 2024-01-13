import styled from 'styled-components'
import ReactSelect from 'react-select'

export const Container = styled.div`
    min-height: 100vh;
`

export const ProductsImg = styled.img`
    width: 50px;
    border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
   width: 250px;

   .css-13cymwt-control{
    cursor: pointer;
   } //muito bom
`

export const Menu = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    margin: 30px 0;
    

`

export const LinkMenu = styled.a`
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    font-size: 14px;
    font-weight: ${props => (props.isActiveStatus ? 'bold' : '400') };
    border-bottom: ${props => (props.isActiveStatus ? '1px solid #d62300' : '400') };
    padding-bottom: 5px;
    color: #461c0e;
    
`