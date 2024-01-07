import styled from 'styled-components'

export const Container = styled.div``

export const ProductsImg = styled.img`
    width: 100%;
`
export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 20px;
`

export const CategoryButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: ${ props => (props.isActiveCategory ? '#ee2d1c' : '#5e210c') }  ;
    font-size: 20px;
    font-weight: 600;
    
`