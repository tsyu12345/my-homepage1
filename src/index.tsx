/**tailwind's import */
import './input.css';

/**React import */
import React from 'react';
import ReactDOM from 'react-dom/client';

/**components import */
import { Header } from './Components/header/header';


const rootDOM = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootDOM);
root.render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>
);