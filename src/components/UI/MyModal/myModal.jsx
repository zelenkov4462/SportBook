import React from 'react';
import './modal.css'

const MyModal = ({active, setActive, children}) => {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'myModalContent active' : 'myModalContent'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal;
