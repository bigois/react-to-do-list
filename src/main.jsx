import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from './components/ui/provider';
import App from './App';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>
);
