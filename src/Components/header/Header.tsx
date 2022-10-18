import React from "react";
import { SNSIcon } from "./Components/SNSIcon";

export const Header: React.FC = () => {
    return (
        <div className="header-container">
            <SNSIcon icon={['fas', 'github']} />
            <SNSIcon icon={['fas', 'twitter']} />
            <SNSIcon icon={['fas', 'instagram']} />
        </div>
    )
}