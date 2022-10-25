import React from "react";

type Props = {
    src: string;
}

export const Background = (props: Props) => {
    return (
        <div id="background" className="mx-5">
            <img src={props.src} alt="工事中画像" className="mx-auto w-4/5"/>
        </div>
    );
}