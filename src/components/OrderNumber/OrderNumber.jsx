import React from 'react';
import { OrderNumberComponent, OrderNumberTitle, OrderNumberNumber } from './OrderNumber.style';

const OrderNumber = ({ number }) => {
  return (
    <OrderNumberComponent className="orderNumberComponent">
      <OrderNumberTitle>your ordernumber is</OrderNumberTitle>
      <OrderNumberNumber>{number}</OrderNumberNumber>
    </OrderNumberComponent>
  );
};

export default OrderNumber;
