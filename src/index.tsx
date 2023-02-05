import './input.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { Body } from "./Components/MainBody/Body";
import { Background } from './Components/background/Background';
import "./Components/lib/images/kkrn_icon_koujichuu_1.png";
import { Header } from './Components/Header/Header';
import { Footer } from "./Components/Footer/Footer";




const App = () => {
    return (
        <div id="body-container" className="w-full">
            <Background src="./Components/lib/images/kkrn_icon_koujichuu_1.png" />
            <Header />
            <div id="contents-container" className="w-full h-[510px] absolute top-0 mt-[75px] overflow-y-scroll">
                <Body />
            </div>
            <Footer />
        </div>
    );
}

const rootDOM = document.getElementById('root') as HTMLElement;
const root = createRoot(rootDOM);
root.render(<App />);