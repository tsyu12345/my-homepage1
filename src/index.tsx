import './input.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { Body } from "./Components/MainBody/Body";
import { Background } from './Components/background/Background';
import { Header } from './Components/Header/Header';
import "./Components/lib/images/kkrn_icon_koujichuu_1.png";
//import { Footer } from "./Components/MainFooter/Footer";


const App = () => {
    return (
        <div id="body-container">
            <Background src="./Components/lib/images/kkrn_icon_koujichuu_1.png" />
            <div id="contents-container">
                <Header />
                <Body />
            </div>
        </div>
    );
}

const rootDOM = document.getElementById('root') as HTMLElement;
const root = createRoot(rootDOM);
root.render(<App />);