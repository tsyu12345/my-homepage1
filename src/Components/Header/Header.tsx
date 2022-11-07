import React from "react";

import { Charactor } from "./Components/Charactor";
import { moveCharactor } from "./Components/Movement";
/**Gif import */
import "../lib/images/buru.gif";
import "../lib/images/dwarf3.gif";

export const Header:React.FC = () => {
    const [charactor, setCharactor] = React.useState<string>("Components/lib/images/buru.gif");
    return (
        <div id="header">
            <div className="charactor-container relative bottom-[-35px]">
                <Charactor src="Components/lib/images/buru.gif"/>
            </div>
        </div>
    );
};

export default Header;