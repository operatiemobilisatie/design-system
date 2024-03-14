import React, { ReactNode } from "react";
import './Badge.scss';

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

export interface Badge {
  className: String,
  color: String,
  attributes: Object,
  as: any
  children: ReactNode
}

const Badge = ({
  children,
  className = '',
  as = 'span',
  color = 'primary',
  attributes
}: Badge) => {
  const BadgeElement:Badge["as"] = as;

  return (
    <BadgeElement
      className={`badge badge-${color} ${className}`}
      {...attributes}
    >
      {children}
    </BadgeElement>
  )
};

export default Badge;