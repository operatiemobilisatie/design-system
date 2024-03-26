import React, { ReactNode } from "react";
import { faExclamationTriangle, faExclamationCircle, faCheckCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import './Alert.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export interface Alert {
  className: String,
  variant: 'neutral' | 'info' | 'success' | 'warning' | 'danger',
  children: ReactNode
}

const variants = {
  'neutral': {
      class: 'bg-gray-300 text-gray-800',
      icon: faInfoCircle
  },
  'info': {
      class: 'bg-blue-300 text-blue-800',
      icon: faInfoCircle
  },
  'success': {
      class: 'bg-green-300 text-green-800',
      icon: faCheckCircle
  },
  'warning': {
      class: 'bg-orange-300 text-orange-800',
      icon: faExclamationTriangle
  },
  'danger': {
      class: 'bg-primary-300 text-primary-800',
      icon: faExclamationCircle
  }
}

const Alert = ({variant, children, className}:Alert) => {
    return (
        <div className={`flex items-center px-4 py-3 text-lg rounded-xl ${variants[variant].class} ${className}`}>
            <FontAwesomeIcon icon={variants[variant].icon} className="mr-2 h-6 w-6" />{children}
        </div>
    )
}

export default Alert;