import React from "react";

type Props = {
    title?: string
    text: string;
}

export const InfoText: React.FC<Props>= (props: Props) => {
    
    let title: string = "";
    if (props.title) {
        title = props.title;
    }
    const text: string = props.text;
    
    return (
        <div className="info-msg mx-auto">
            <div className="">
                <p className="">{props.title}</p>
                <p>{props.text}</p>
            </div>
        </div>
    );
}