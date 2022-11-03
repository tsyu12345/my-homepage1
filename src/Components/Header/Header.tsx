import React from "react";

import { Charactor } from "./Components/Charactor";
/**Gif import */
import "../lib/images/buru.gif";
import "../lib/images/dwarf3.gif";

export const Header:React.FC = () => {
    return (
        <div id="header">
            <div className="charactor-container relative bottom-[-35px]">
                <Charactor src="Components/lib/images/buru.gif"/>
            </div>
        </div>
    );
};

export default Header;