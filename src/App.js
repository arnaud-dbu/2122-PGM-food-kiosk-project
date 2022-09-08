import { Route, Routes } from 'react-router-dom';
import CheckOut from './pages/CheckOut';
import Menu from './pages/Menu';
import Start from './pages/Start';
import NotFound from './pages/NotFound';
import OrderValidation from './pages/OrderValidation';
import { GlobalStyle } from './styles/GlobalStyles.styles';
import ROUTES from './routes/routes';
import OrderType from './pages/OrderType';
import { OrderProvider } from './contexts/OrderContext';
import { DishProvider } from './contexts/DishContext';
import { CountProvider } from './contexts/CountContext';
import { ModalProvider } from './contexts/ModalContext';
import { CategoryProvider } from './contexts/CategoryContext';
import { TimeLineProvider } from './contexts/TimeLineContext';
import { IdleTimerProvider } from './contexts/IdleTimerContext';

function App() {
  return (
    <OrderProvider>
      <DishProvider>
        <CountProvider>
          <ModalProvider>
            <CategoryProvider>
              <TimeLineProvider>
                <GlobalStyle />
                <IdleTimerProvider>
                  <Routes>
                    <Route path={ROUTES.START} element={<Start />} />
                    <Route path={ROUTES.ORDER_TYPE} element={<OrderType />} />
                    <Route path={ROUTES.MENU} element={<Menu />} />
                    <Route path={ROUTES.CHECKOUT} element={<CheckOut />} />
                    <Route path={ROUTES.ORDER_VALIDATION} element={<OrderValidation />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </IdleTimerProvider>
              </TimeLineProvider>
            </CategoryProvider>
          </ModalProvider>
        </CountProvider>
      </DishProvider>
    </OrderProvider>
  );
}

export default App;
