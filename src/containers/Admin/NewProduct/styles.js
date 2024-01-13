import styled from 'styled-components';
import  {Button} from '../../../components'


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    
    
    form {
        background: #461c0e ;
        color: #fff;
        padding: 30px;
        border-radius: 10px;
    }

`

export const Label = styled.p`
        color: #fff;
        font-size: 14px;
        margin-bottom: 5px;
`

export const Input = styled.input`
        height:40px ;
        width: 100%;
        border:none;
        border-radius: 5px;
        box-shadow: 0px 4px 14px rgba(0,0,0,0.1);
        margin-bottom:25px;
`

export const ButtonStyled = styled(Button)`
        width: 100%;
        margin-top:30px;
        padding: 5px 0 5px 0;
`