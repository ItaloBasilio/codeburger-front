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
        color: #FFF;
        font-size: 14px;
        margin-bottom: 5px;
`

export const Input = styled.input`
        height:40px ;
        border:none;
        border-radius: 5px;
        box-shadow: 0px 4px 14px rgba(0,0,0,0.1);
        margin-bottom:25px;
        width: 100%;
        min-width: 280px;
        padding-left: 10px;
        
`

export const ButtonStyled = styled(Button)`
        width: 100%;
        margin-top:30px;
        padding: 5px 0 5px 0;
`

export const LabelUpload = styled.label`
        cursor: pointer;
        display: flex;
        align-items: center;
        border: 1px dashed #ffffff;
        border-radius: 5px;
        padding: 10px;
        margin-bottom:25px;
        gap: 10px;

        input{
            opacity: 0;
            width: 1px;
        }
`