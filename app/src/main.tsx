import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import {NextUIProvider} from '@nextui-org/react'
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <NextUIProvider>
          <App />
        </NextUIProvider>
    </Provider>
  </React.StrictMode>,
)
