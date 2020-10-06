import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.clearCart = this.clearCart.bind(this);
  }

  clearCart() {
    localStorage.clear();
    document.location.reload();
  }

  render() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let itens;
    if (cart) {
      itens = cart.map((prod, index) => (
        <div data-testid="product" key={ index }>
          <h4 data-testid="shopping-cart-product-name">{ prod.title }</h4>
          <img src={ prod.thumbnail } alt="fotografia do produto" />
          <p><span>{`R$: ${prod.price}`}</span></p>
          <p data-testid="shopping-cart-product-quantity">1</p>
        </div>
      ));
    } else {
      itens = <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }

    return (
      <div>
        <h1>Meu Carrinho</h1>
        <button type="button" onClick={ () => this.clearCart() }>Limpar Carrinho</button>
        {itens}
      </div>
    );
  }
}

export default ShoppingCart;
