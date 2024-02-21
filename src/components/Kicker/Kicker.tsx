import React, { ReactNode } from "react";
import './Kicker.scss';

export interface Kicker {
  className: String,
  children: ReactNode
  attributes: Object,
  as: any,
}

const Kicker = ({
  children,
  className = '',
  attributes,
  as = 'span',
}: Kicker) => {
  const KickerElement:Kicker["as"] = as;

  return (
    <KickerElement
      className={`kicker ${className}`}
      {...attributes}
    >
      {children}
    </KickerElement>
  )
};

export default Kicker;