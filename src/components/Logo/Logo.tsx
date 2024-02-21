import React, { ReactNode } from "react";
import './Logo.scss';

export interface Logo {
  className: String,
  children: ReactNode
  attributes: Object,
  width: string,
  height: string,
  as: any,
}

const Logo = ({
  className = '',
  attributes,
  width = '100px',
  height = '100px',
  as = 'figure',
}: Logo) => {
  const LogoElement:Logo["as"] = as;

  return (
    <LogoElement
      className={`om-logo` + (className ? ' ' + className : '')}
      style={{width, height}}
      {...attributes}
    >
      <svg width="100%" height="100%" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="128" cy="128" r="108.8" fill="white"/>
        <path d="M105.301 2.73068C63.3173 10.24 26.7946 39.7653 10.4106 79.36C-10.752 130.048 3.92529 189.952 45.9093 225.109C93.3546 264.533 158.891 265.045 208.043 226.645C233.643 206.677 251.563 172.032 255.147 136.533C256 129.195 255.317 119.979 253.611 109.739C248.491 79.7014 237.568 58.368 217.6 38.4C198.485 19.1147 175.787 7.33868 148.48 2.38935C132.608 -0.511987 122.368 -0.34132 105.301 2.73068ZM127.488 61.44C135.851 66.3893 136.875 69.8027 134.656 83.1147C128.512 118.955 104.107 177.493 89.6 191.147C83.2853 197.12 69.12 197.973 60.2453 192.853C47.2746 185.685 45.2266 176.299 51.0293 153.088C57.0026 129.877 68.608 110.933 76.8 110.933C78.848 110.933 80.896 108.032 83.6266 101.717C88.7466 88.9174 103.253 65.8773 108.544 61.6107C114.176 57.1733 120.491 57.0027 127.488 61.44ZM167.765 63.8293C181.76 69.8027 183.808 77.1414 177.493 101.376C175.616 108.885 174.251 115.029 174.421 115.371C174.763 115.541 177.152 112.299 180.053 108.203C182.784 104.107 186.197 100.352 187.563 99.84C190.805 98.6454 203.264 107.52 205.995 112.811C207.36 115.541 208.213 124.928 208.213 139.605V162.304L204.459 161.28C202.24 160.597 198.315 158.72 195.413 157.184C190.976 154.624 190.123 153.088 189.44 145.579C188.928 140.629 188.075 136.363 187.563 135.851C187.221 135.339 182.784 141.483 177.664 149.504C172.715 157.355 167.936 163.84 167.083 163.84C166.4 163.84 161.451 161.963 156.16 159.744C146.944 155.477 146.773 155.477 146.773 148.139C146.603 141.312 145.92 142.677 135.68 166.4C129.707 180.395 124.416 193.195 124.075 194.901C123.563 196.608 121.856 197.973 119.979 197.973C115.2 197.973 104.277 194.56 103.253 192.683C100.864 188.928 119.467 141.653 137.557 105.472C150.357 79.872 160.427 61.44 161.451 61.44C161.963 61.44 164.693 62.464 167.765 63.8293Z" fill="#D22630"/>
        <path d="M103.424 102.229C96.9387 115.029 91.136 124.587 89.7707 124.587C85.3333 124.587 78.6773 134.827 74.4107 148.139C69.2907 164.352 67.2427 179.2 69.8027 179.2C72.5333 179.2 84.3093 160.597 93.0133 142.507C100.693 126.635 116.736 82.0906 115.371 80.7253C114.859 80.2133 109.568 89.9413 103.424 102.229Z" fill="#D22630"/>
      </svg>
      <span className="sr-only text-primary">OM Logo</span>
    </LogoElement>
  )
};

export default Logo;