import React from 'react';
import { Icon } from "./Components/Icon";
type Props = {};

export const Footer:React.FC<Props> = () => {
    return(
        <div id="footer" className="absolute bottom-0 w-full h-40 bg-black">
            <div id="SNSIcon-container" className="mt-10 mx-auto w-fit text-white">
                <Icon icon={['fab', 'github']} size={"2xl"} url={"https://github.com/tsyu12345"}/>
                <Icon icon={['fab', 'twitter']} size={"2xl"} url={"https://twitter.com/syukunt1"}/>
                <Icon icon={['fab', 'instagram']} size={"2xl"} url={""}/>
                <Icon icon={["fab", "youtube"]} size={"2xl"}/>
            </div>
            
            <p className="mx-auto my-10 text-white w-fit ">
                <Icon icon={["fas", "copyright"]} size={"sm"}/>
                2022-10-31 髙林秀 All Rights Reserved.
            </p>
        </div>
    );
};
export default Footer;