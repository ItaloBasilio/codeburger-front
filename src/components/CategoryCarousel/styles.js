import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 30px 0;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); 

    .rec.rec-arrow {
    border-radius: 1;
    background-color: #d62300;
    color: white;
    }

    .rec.rec-arrow:hover {
    border:2px solid #d62300;
    background-color: white;
    color: #d62300;
    }

    .rec.rec-arrow:disabled {
    border: none;
    background-color: #461c0e;
    color: white;
    }

    .rec-dot_active{
        
        background-color:#d62300;
        
    }

    .klENKW{
        box-shadow: 0 0 1px 3px #d62300;
        border: 1px solid #d62300;
    }

    .flTOpl{
        border: 1px solid #d62300;
        box-shadow: 0 0 1px 1px #d62300;
    }



`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
`

export const Image = styled.img`
    width: 200px;
`

export const Button = styled.button`
    margin-top: 16px;
    color: #f2e5d4;
    background: #d62300;
    padding: 20px 0 20px 0;
    line-height: 5px;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    

`

export const CategoryImg = styled.img``