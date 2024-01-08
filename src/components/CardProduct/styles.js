import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 30px;
    background: #f5ebdc;
    display: flex;
    gap: 12px;
    padding: 16px;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const Image = styled.img`
    width: 150px ;
    height: 172px;
    border-radius: 16px;
`

export const ProductName = styled.p`
    margin-top: 10px;
    font-style: normal ;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    color: #5e210c;
`

export const ProductPrice = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    margin-top: 30px;
`

export const ButtonCart = styled.button`
    cursor: pointer;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    width: 200px;
    background: #f21f00;
    color: white;
    padding: 3px 0 3px 0;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`

