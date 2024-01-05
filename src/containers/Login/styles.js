import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh ;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const LoginImage = styled.img `
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
    font-weight: 500;
    font-size: 16px;
    line-height: 14px;
    margin-top: 15px;
    margin-bottom: 10px;
`

export const Input = styled.input`
    width: 300px;
    height: 35px;
    border: none;
    padding-left: 10px;
`

export const Button = styled.button`
    width: 150px;
    background-color: #d62300;
    color: #f5ebdc;
    font-size: 20px;
    padding: 10px 10px;
    border: none;
    border-radius: 8px;
    margin-top: 35px;
    margin-bottom: 35px;
    
    cursor: pointer;

   &:hover{
    opacity: 0.8;
   }

   &:active{
    opacity: 0.6;
   }
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