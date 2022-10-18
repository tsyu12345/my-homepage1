import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import React from 'react';

export const SNSIcon: React.FC<FontAwesomeIconProps> = (props) => {
    return <FontAwesomeIcon icon={props.icon} />
}