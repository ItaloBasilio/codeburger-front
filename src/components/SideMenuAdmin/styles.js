import { Link } from 'react-router-dom'

import styled from 'styled-components'


export const Container = styled.div`
    background: #461c0e ;
    box-shadow: 0px 0px 14px rgba(0,0,0,0.15);
    width: 250px;
    top:0;
    left: 0;

    hr{
        margin: 20px 15px;
        color: #461c0e;
    }

    .logo{
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        margin-left:40px;
    }
`

export const ItemContainer = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    background: ${props => (props.isActive ? '#461c0e' : 'none')};
    margin: 8px;
    padding-left: 20px;

    .icon{
        color:#fff;
        
    }
`

export const ListLink = styled(Link)`
    text-decoration: none;
    color:#fff;
    font-weight: 500;
    padding-left: 10px;
    font-size: 16px;
    line-height: 19px;
`