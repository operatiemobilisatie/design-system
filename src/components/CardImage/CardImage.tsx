import React, { ReactNode } from "react";
import Image from "next/image";

export interface CardImage {
    children: ReactNode
    className: string,
    fill: boolean,
    image: string,
    alt: string
}

const CardImage = ({
  children,
  className = '',
  alt,
  fill,
  image
}: CardImage) => {
  return (
    <>
      <div className={`card-image ${!fill ? 'overflow-clip relative aspect-video -mx-8 -mt-8 mb-8' : ''}`}>
        <Image src={image} alt={alt} fill={true} />
        {children && <div className={`absolute inset-0 ${!fill ? 'bg-gradient-to-t from-black/20 to-transparent' : 'bg-black/40'} ${className}`}></div>}
        <div className={`relative drop-shadow-sm text-white ${!fill ? 'h-full flex items-end p-8' : ''}`}>
          {children}
        </div>
      </div>
    </>
  )
};

export default CardImage;