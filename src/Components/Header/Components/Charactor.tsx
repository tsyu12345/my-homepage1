import { type } from "os";
import React from "react";

type Props = {
    src: string;
    id? : string; 
}

export const Charactor: React.FC<Props> = (props: Props) => {
    return (
        <div className="charactor">
            <img src={props.src} alt="charactor" />
        </div>
    );
}
export default Charactor;

