import React, { ReactNode } from "react";
import './Button.scss';

// /**
//  * @typedef Props
//  * @prop {string} className Pass any custom classes
//  * @prop {string} color Color of the button
//  * @prop {string} variant Variant can be full | outline | icon
//  * @prop {string} size Size can be normal | small
//  * @prop {React.ReactNode} children
//  * @prop {React.ReactNode} as Take on a different element than button
//  * @prop {object} attributes Pass any other non-specified properties
//  */

// /**
//  * A button looking element acting as button by default
//  * @param {Props} props 
//  * @returns 
//  */

export interface Button {
  className: String,
  color: String,
  size: String,
  variant: String,
  attributes: Object,
  as: any
  children: ReactNode
}

const Button = ({
  children,
  className = '',
  as = 'button',
  color = 'primary',
  size = 'md',
  variant = 'full',
  attributes
}: Button) => {
  const ButtonElement:Button["as"] = as;

  return (
    <ButtonElement
      className={`button button-${variant} button-${size} button-${color} ${className}`}
      {...attributes}
    >
      {children}
    </ButtonElement>
  )
};

export default Button;