import React from "react";

type Props = {
    src: string;
}

export const Background = (props: Props) => {
    return (
        <div id="background">
            <img src={props.src} alt="工事中画像" />
        </div>
    );
}