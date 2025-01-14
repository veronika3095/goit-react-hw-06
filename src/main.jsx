import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; 
import { store, persistor } from './redux/store'; 
import { PersistGate } from 'redux-persist/integration/react'; 
import './index.css';
import App from './components/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
