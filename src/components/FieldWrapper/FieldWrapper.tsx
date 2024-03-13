import React, { ReactNode } from "react";
import './FieldWrapper.scss';

export interface FieldWrapper {
  className: String,
  children: ReactNode,
  style: object,
  attributes: Object,
  as: any,
  label: string,
  fieldId: string,
  required: boolean,
  errorMessage: string,
  size: 'sm' | 'md' | 'lg'
}

const FieldWrapper = ({
  children,
  className = '',
  style,
  attributes,
  as = 'div',
  label,
  fieldId,
  required,
  errorMessage,
  size
}: FieldWrapper) => {
  const FieldWrapperElement:FieldWrapper["as"] = as;

  return (
    <FieldWrapperElement
      className={`field-wrapper ${size ? `field-wrapper-${size}` : ''} ${className}`}
      {...attributes}
      style={style}
    >
      {label && (
        <label htmlFor={fieldId}>
          {label}
          {required && <sup>*</sup>}
        </label>
      )}
      {children}
      <small className="text-primary">
        <i>
          {errorMessage}
        </i>
      </small>
    </FieldWrapperElement>
  )
};

export default FieldWrapper;