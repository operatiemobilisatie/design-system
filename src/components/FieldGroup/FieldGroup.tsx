import React, { ReactNode } from "react";
import './FieldGroup.scss';

export interface FieldGroup {
    children: ReactNode
    className: string,
    name: string
    size: string,
    label: object | string,
}

const FieldGroup = ({children, label, outline, groupId, className}) => {
    return (
        <div role="group" aria-labelledby={`${groupId}-label`} id={groupId} className={`flex flex-col gap-2 ${outline ? 'border border-gray-200 px-4 py-3 rounded-xl' : ''} ${className}`}>
            <>
                <div id={`${groupId}-label`}>{label}</div>
                {children}
            </>
        </div>
    )
}

export default FieldGroup;