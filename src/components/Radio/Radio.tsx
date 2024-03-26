import React, { ReactNode } from "react";
import './Radio.scss';

export interface Radio {
    children: ReactNode
    className: string,
    name: string
    size: string,
    label: object | string,
    as: ReactNode,
}

const RadioIndicator = () => (
    <div className="radio-indicator mr-2"></div>
)

const Radio = (props:Radio) => {
    const RadioElement = props.as || 'input';

    return (
        <label className="flex items-center cursor-pointer">
            <RadioElement {...props} type="radio" className={`radio ${props.className}`} children={null} />
            <RadioIndicator />
            {props.children}
        </label>
    )
}

export default Radio;