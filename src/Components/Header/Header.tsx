import React from "react";

import { Icon } from "./Components/Icon";

export const Header = () => {
    return (
        <div id="header">
            <div id="header-icon-container">
                <Icon icon={["fab","github"]} />
                <Icon icon={["fab","twitter"]} />
                <Icon icon={["fab","instagram"]} />
                <Icon icon={["fab","youtube"]} />
            </div>
        </div>
    );
};

export default Header;