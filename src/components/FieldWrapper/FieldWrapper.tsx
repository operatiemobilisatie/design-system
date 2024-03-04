import React, { ReactNode } from "react";
import './FieldWrapper.scss';

export interface FieldWrapper {
  className: String,
  children: ReactNode
  attributes: Object,
  as: any,
  label: string,
  fieldId: string,
  size: 'sm' | 'md' | 'lg'
}

const FieldWrapper = ({
  children,
  className = '',
  attributes,
  as = 'div',
  label,
  fieldId,
  size
}: FieldWrapper) => {
  const FieldWrapperElement:FieldWrapper["as"] = as;

  return (
    <FieldWrapperElement
      className={`field-wrapper ${size ? `field-wrapper-${size}` : ''} ${className}`}
      {...attributes}
    >
      {label && <label htmlFor={fieldId}>{label}</label>}
      {children}
    </FieldWrapperElement>
  )
};

export default FieldWrapper;