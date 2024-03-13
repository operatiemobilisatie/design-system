import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

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

export interface Loading {
  className: String,
  attributes: Object,
  as: any
  children: ReactNode
}

const Loading = ({
  className = '',
  as = 'article',
  attributes
}: Loading) => {
  const LoadingElement:Loading["as"] = as;

  return (
    <LoadingElement
      className={`w-full flex justify-center items-center h-96 ${className}`}
      {...attributes}
    >
      <FontAwesomeIcon icon={faSpinner} width="48px" height="48px" className="animate-spin text-5xl"/>
    </LoadingElement>
  )
};

export default Loading;