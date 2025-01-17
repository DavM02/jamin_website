import React, { memo } from "react";
 import trashIcon from "../../../assets/icons/bag.svg";
  
function CartItem({
  product,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
}) {


 
  const handleDecreaseQuantity = (e) => {
    e.stopPropagation();
    product.quantity > 1
      ? decreaseQuantity(product.id)
      : removeProduct(product.id);
  };

  const handleIncreaseQuantity = (e) => {
    e.stopPropagation();
    increaseQuantity(product.id);
  };

  const handleRemoveProduct = (e) => {
    e.stopPropagation();
    removeProduct(product.id);
  };

  return (
    <>
      <div className="row wrap gap-30">
        <div className="cart-item-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="column gap-20 s-between">
          <div>
            <h6 className="text-black-secondary">
              {product.product.split(" ")[1]} {product.name}
            </h6>
            <span className="xsmall-text text-main text-black">
              {(product.price * product.quantity).toLocaleString("ru-RU")} руб
            </span>
          </div>
          <div className="cart-item-quantity text-black-secondary grid-3 xsmall-text text-main">
            <div className="center-gr" onClick={handleDecreaseQuantity}>
              <span>-</span>
            </div>
            <div className="center-gr">
              <span>{product.quantity}</span>
            </div>
            <div className="center-gr" onClick={handleIncreaseQuantity}>
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
      <div className="remove-item center-gr" onClick={handleRemoveProduct}>
        <img src={trashIcon} alt="remove" />
      </div>
    </>
  );
}

export default memo(CartItem);
