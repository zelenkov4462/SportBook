import React, {useState} from 'react';
import classes from "../Button/MyButton.module.css";
import MyModal from "./myModal";

const RulesModal = () => {

    const [modalActive, setModalActive] = useState(false);

    return (
        <div>

            <MyModal
                children={props.info}
                active={modalActive}
                setActive={setModalActive}>
            </MyModal>,

            <div className='modal-header'>
                <h1>Sacrifice rules</h1>
            </div>
            <div className='modal-info'>
                <div className='modal-info-form'>

                    <img src="" alt="конверт"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto deleniti dolor excepturi facilis iure maxime nulla officiis placeat ullam. Aliquam aut dolore doloribus minima molestias natus qui sed vero.</p>
                </div>
            </div>
            <div className='modal-footer'>
                <button className={classes.myBtn}>Got it!</button>
            </div>
        </div>
    );
};

export default RulesModal;
