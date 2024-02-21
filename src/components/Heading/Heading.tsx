import React, { ReactNode } from "react";
import './Heading.scss';

export interface Heading {
  className: String,
  children: ReactNode
  attributes: Object,
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = ({
  children,
  className = '',
  attributes,
  level = 'h2',
}: Heading) => {
  const HeadingElement:Heading["level"] = level;

  return (
    <HeadingElement
      className={`${className}`}
      {...attributes}
    >
      {children}
    </HeadingElement>
  )
};

export default Heading;