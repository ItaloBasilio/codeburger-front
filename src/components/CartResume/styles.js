import styled from 'styled-components'

export const Container = styled.div`
    width: 300px;
    background-color: #f5ebdc ;
    padding: 15px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .container-top{
        display: grid;
        grid-gap: 10px 50px ;
        grid-template-areas: 
        'title title'
        'items items-price'
        'delivery-tax delivery-tax-price'
        ;

        
        .title{
        grid-area:title ;
        margin-bottom: 20px;
        color: #502314 ;
        text-align: center;
        font-size: 20px;
    }

    .items{
        grid-area:items ;
        font-size: 14px;
    }

    .items-price{
        grid-area:items-price ;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
    }

    .delivery-tax{
        grid-area:delivery-tax ;
        font-size: 14px;
    }

    .delivery-tax-price{
        grid-area:delivery-tax-price ;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
    }

    }


    .container-bottom{
       display :flex ;
       margin-top: 50px;
       flex-direction: row;
       justify-content: space-between;
       font-size: 24px;
    }
   
`



