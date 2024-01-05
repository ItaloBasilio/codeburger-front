import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh ;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const RegisterImage = styled.img `
    height: 70%;
    border-radius: 10px 0 0 10px;

`

export const ContainerItens = styled.div`
    background-color: #f5ebdc;
    border-radius: 0 10px 10px 0;
    height: 70%;
    padding: 25px 75px ;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
        text-align: center;
        color: #502314;
    }

    form{
        display: flex;
        flex-direction: column;
    }
`

export const Label = styled.p`
    font-style: normal;
    color: #502314;
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    margin-top: ${props => (props.error ? '12px' : '28px')};
    margin-bottom: 10px;
`

export const Input = styled.input`
    width: 350px;
    height: 35px;
    border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
    border-radius: 5px;
    padding-left: 10px;
`


export const SignInLink = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 16px;

    a{
        cursor: pointer;
        text-decoration: underline;
    }
`

export const ErrorMessage = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    margin-top:7px;
    color: #cc1717;
`