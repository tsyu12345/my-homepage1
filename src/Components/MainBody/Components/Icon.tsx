import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

export const Icon: React.FC<FontAwesomeIconProps> = (props) => {
    
    library.add(fab);
    
    return (
        <div className="IconWrapper">
            <FontAwesomeIcon icon={props.icon} />
        </div>
    );
}

export default Icon;