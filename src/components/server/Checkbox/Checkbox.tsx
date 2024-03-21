import React, { ReactNode } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Checkbox.scss';

export interface Checkbox {
    children: ReactNode
    className: string,
    name: string
    size: string,
    label: object | string,
    as: ReactNode,
}

const CheckboxIndicator = () => (
    <div className="checkbox-indicator mr-2">
        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
    </div>
)

const Checkbox = (props:Checkbox) => {
    const CheckboxElement = props.as || 'input';

    return (
        <label className="flex items-center cursor-pointer">
            <CheckboxElement {...props} type="checkbox" className={`checkbox ${props.className}`} children={null} />
            <CheckboxIndicator />
            {props.children}
        </label>
    )
}

export default Checkbox;