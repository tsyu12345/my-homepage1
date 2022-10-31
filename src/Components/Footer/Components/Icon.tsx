import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

type Props = {
    icon: FontAwesomeIconProps['icon'];
    size: FontAwesomeIconProps['size'];
    url?: string;
}

export const Icon: React.FC<Props> = (props) => {
    
    library.add(fab);
    library.add(fas);
    return (
        <div className="IconWrapper contents">
            <a href={props.url}>
                <FontAwesomeIcon icon={props.icon} size={props.size} className="mx-3"/>
            </a>
        </div>
    );
}

export default Icon;