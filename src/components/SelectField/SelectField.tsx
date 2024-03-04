import React, { ReactNode } from "react";
import Select from 'react-select';
import './SelectField.scss'

export interface SelectField {
  className: String,
  children: ReactNode
  attributes: Object,
  size: 'sm' | 'md' | 'lg'
}

const SelectField = (props: SelectField) => {
  const {size = 'md'} = props;
  
  return (
    <Select
      {...props}
      classNamePrefix="om-select"
      unstyled
      className={`om-select-${size}`}
    />
  )
};

export default SelectField;