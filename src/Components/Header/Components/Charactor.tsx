import React, { useState } from "react";


type Props = {
    src: string;
    id? : string; 
    /**初期位置[x, y] */
    position?: [number, number];
}

export const Charactor: React.FC<Props> = (props: Props) => {

    //defning the state
    const position: [number, number] = props.position ? props.position : [0, 0]; //nullish coalescing operator
    const [charactorPos, setCharactorPos] = useState<[number, number]>(position);

    /**右から左へ移動 */
    const mvCharacterEdgeFromEdge = (): void => {
        
    }

    return (
        <div className="charactor" /*onLoad={moveCharactor}*/> //todo: add onload event
            <img src={props.src} alt="charactor" />
        </div>
    );
}
export default Charactor;

