"use client"

import React, { useId, ReactNode } from "react";
import Select from 'react-select';
import './SelectField.scss'

export interface SelectField {
  className: String,
  children: ReactNode,
  attributes: object,
  size: 'sm' | 'md' | 'lg'
}

const getValue = ({options, field}) => {
  if(options && field.value) {
    return options.filter(option => field.value.indexOf(option.value) >= 0);
  } else {
    return [];
  }
}

const onChange = (props, values) => {
  if(props.form && props.field) {
    props.form.setFieldValue(props.field.name, (
      // If isMulti -> map values
      props.isMulti ? (
        values.map((option) => option.value)
      ) : (
        [values.value]
      )
    ))
  }
}


const SelectField = (props: SelectField) => {
  const {size = 'md'} = props;
  
  return (
    <Select
      // When using Formik -> get initial values
      value={getValue(props)}
      
      // When using Formik -> update form
      onChange={(values) => onChange(props, values)}
      
      {...props}
    
      classNamePrefix="om-select"
      unstyled
      instanceId={useId()}
      className={`om-select-${size}`}
    />
  )
};

export default SelectField;