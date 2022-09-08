import { createContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modal, setModal] = useState({ visible: false, data: null });
  return <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>;
}

export default ModalContext;
