import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';

export default function CartButton({ quantity, updateQuantity }) {
  return (
    <div className="cart_button">
      <AiOutlineMinusSquare onClick={() => updateQuantity('decrease')} />
      <span>{quantity}</span>
      <AiOutlinePlusSquare onClick={() => updateQuantity('increase')} />
    </div>
  );
}
