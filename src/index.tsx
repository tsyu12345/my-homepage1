import './input.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { Body } from "./Components/MainBody/Body";
import { Background } from './Components/background/Background';
import "./Components/lib/images/kkrn_icon_koujichuu_1.png";
//import { Footer } from "./Components/MainFooter/Footer";
//import { Header } from "./Components/MainHeader/Header";


const App = () => {
    return (
        <div id="main">
            <Background src="./Components/lib/images/kkrn_icon_koujichuu_1.png" />
            <Body />
        </div>
    );
}

const rootDOM = document.getElementById('root') as HTMLElement;
const root = createRoot(rootDOM);
root.render(<App />);