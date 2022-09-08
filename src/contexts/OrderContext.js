import { createContext, useState } from 'react';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orderType, setOrderType] = useState('');
  const [order, setOrder] = useState([]);

  return (
    <OrderContext.Provider value={{ order, setOrder, orderType, setOrderType }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
