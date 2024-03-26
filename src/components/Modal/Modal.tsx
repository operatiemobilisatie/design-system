"use client"

import React, { ReactNode, useEffect } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MicroModal from 'micromodal';
import { Button, Card } from '../index';
import './Modal.scss';
// import { Button } from 'components';

// /**
//  * 
//  * @typedef {Props} props
//  * @prop {string} className
//  * @prop {React.ReactNode} children
//  * @prop {React.ReactNode} title
//  * @prop {React.ReactNode} description
//  * @returns 
//  */


export interface Modal {
    className: string,
    children: ReactNode,
    attributes: object,
    settings: object,
    id: string
}

const Modal = ({id = 'modal', settings, className, children}:Modal) => {

    useEffect(() => {
        MicroModal.init({
            onShow: () => document.querySelector('body').classList.add('modal-open'),
            onClose: () => document.querySelector('body').classList.remove('modal-open'),
            disableScroll: true,
            // disableFocus: true,
            ...settings,
        });
    }, [])

    return (
        <div id={`${id}-modal`} className='modal group fixed w-full h-full transition-opacity bg-black/20 duration-150 inset-0 z-50' aria-hidden="true">
            <div tabIndex="-1" data-micromodal-close className='w-full h-full relative flex p-4'>
                <Card className={`bg-white my-auto md:m-auto max-w-2xl w-full transition-transform duration-300 translate-y-4 group-[.is-open]:translate-y-0 ${className}`} role="dialog" aria-modal="true" aria-labelledby="follow-up-modal-title" >
                    <Button color="primary" variant="icon" className="absolute right-4 top-4" ariaLabel="Close modal" attributes={{'data-micromodal-close': true}}>
                        <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                    </Button>
                    <div id={`${id}-content`}>
                        {children}
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Modal;