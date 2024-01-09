import React from 'react';
import { useCart } from '../../hooks/cartContext';
import { Container, Header, Body, EmptyCart } from './styles';
import formatCurrency from '../../utils/formatCurrency';

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts, handleRemoveProduct } = useCart();

  return (
    <Container>
      {cartProducts && cartProducts.length > 0 ? (
        <>
          <Header>
            <p></p>
            <p>Itens</p>
            <p>Preço</p>
            <p className='HeaderPrice' style={{ paddingRight: '40px' }}>
              Quantidade
            </p>
            <p>Total</p>
            <p>Apagar</p>
          </Header>
          {cartProducts.map((product) => (
            <Body key={product.id}>
              <img src={product.url} alt='imagem-produto' />
              <p>{product.name}</p>
              <p>{formatCurrency(product.price)}</p>
              <div className='quantity-container'>
                <button onClick={() => decreaseProducts(product.id)}> - </button>
                <p>{product.quantity}</p>
                <button onClick={() => increaseProducts(product.id)}> + </button>
              </div>
              <p>{formatCurrency(product.quantity * product.price)}</p>
              <button className='buttonRemove' onClick={() => handleRemoveProduct(product.id)}>Excluir Item</button>
            </Body>
          ))}
        </>
      ) : (
        <EmptyCart style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Você não fez nenhum pedido 😑
        </EmptyCart>
      )}
    </Container>
  );
}
