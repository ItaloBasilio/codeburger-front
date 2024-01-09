import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 30px;
    margin-left: 30px;
    background-color: #f5ebdc;
    box-shadow: 0px 10px 40px rgba(0,0,0,0.03);
    border-radius: 20px;
    padding: 10px;
    width: 650px;
`
export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 10px;
    border-bottom: 1px solid #502314;
    p{
        font-size: 14px;
        color: #502314;
        font-weight: 500;
    }

    
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    padding: 10px;
    grid-gap: 10px ;
    img{
        border-radius: 10px;
        width: 80px;
    }
    p{
        font-size: 14px;
        font-weight: 600;
        color: #502314;
        
    }

    .buttonRemove{
            background: #502314;
            color: #fff;
            padding: 3px;
            border:none;
            font-size: 13px;
            cursor: pointer;
            border-radius: 6px;
        }

    .quantity-container{
        display: flex;
        gap: 20px;

        button{
            height: 30px;
            background: #e32a18 ;
            color: #fff;
            padding: 5px;
            border: none;
            font-size: 15px;
            cursor: pointer;
        }

        
    }
`

export const EmptyCart = styled.p`
    padding: 20px;
    text-align: center;
    font-weight: bold;
`
