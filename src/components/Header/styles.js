import styled from 'styled-components';

export const Container = styled.div`
    height: 72px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white; 
    z-index: 100; 
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

`;

export const ContainerLeft = styled.div`
    display: flex;
    gap: 30px;
`;

export const LogoBurger = styled.div`
    display: flex;
    width: 60px;
    height: 100px;
`;

export const PageLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.isActive ? '#de4f33' : '#461c0e'} ;
    font-weight: 600;
    font-size: 17px;
    line-height: 19px;

    .user{
        width: 28px;
        height: 30px;
    }
`;

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const ContainerText = styled.div`

    p{
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 16px;
        color:#461c0e;
    }

`;

export const Line = styled.div`
    height: 30px;
    border: 0.2px solid #461c0e;
    opacity: 0.2;
`;

export const PageLinkExit = styled.a`
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
`