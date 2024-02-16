'use client'

import { useEffect } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MicroModal from 'micromodal';
import { Button } from 'components';

/**
 * 
 * @typedef {Props} props
 * @prop {string} className
 * @prop {React.ReactNode} children
 * @prop {React.ReactNode} title
 * @prop {React.ReactNode} description
 * @returns 
 */

const Modal = ({id = 'modal', title, settings, description, className, children}) => {

    useEffect(() => {
        MicroModal.init(settings);
    }, [])

    return (
        <div id={`${id}-modal`} className='modal group fixed w-full h-full transition-opacity bg-black/20 duration-150 inset-0 z-50' aria-hidden="true">
            <div tabIndex="-1" data-micromodal-close className='w-full h-full relative flex'>
                <div className={`relative bg-white mx-4 my-auto md:m-auto max-w-2xl w-full rounded-2xl p-8 transition-transform duration-300 translate-y-4 group-[.is-open]:translate-y-0 ${className}`} role="dialog" aria-modal="true" aria-labelledby="follow-up-modal-title" >
                    <Button color="primary" variant="icon" className='float-right p-1 text-lg' ariaLabel="Close modal" attributes={{'data-micromodal-close': true}}>
                        <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                    </Button>
                    <header className='mb-4'>
                        {title}
                        {description}
                        {/* {title && <h2 className='text-3xl font-bold mb-2' id={`${id}-title`}>
                            {title}
                        </h2>}
                        {description && <p className='text-xl text-secondary'>
                            {description}
                        </p>} */}
                    </header>
                    <div id={`${id}-content`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;