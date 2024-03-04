import React, { ReactNode } from "react";
// import './Button.scss';

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

export interface Typography {
    children: ReactNode
    className: string,
    as: any
    attributes: object,
    size: string,
    noMaxWidth: boolean
    invert: boolean,
}

const Typography = ({
  children,
  className = '',
  as = 'div',
  attributes,
  size = 'base',
  noMaxWidth = false,
  invert = false,
}: Typography) => {
  const TypographyElement:Typography["as"] = as;
  const sizeClasses:object = {
    'sm': 'prose-sm',
    'base': 'prose-base',
    'lg': 'prose-base lg:prose-lg',
    'xl': 'prose-base lg:prose-xl',
  }

  return (
    <TypographyElement
      className={`prose ${sizeClasses[size]} ${invert ? 'prose-invert' : ''} ${noMaxWidth ? 'max-w-none' : ''} ${className}`}
      {...attributes}
    >
      {children}
    </TypographyElement>
  )
};

export default Typography;