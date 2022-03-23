import React, {useState} from 'react';
import classes from './MyButton.module.css';
import MyModal from "../MyModal/myModal";
import '../MyModal/modal.css'

const MyButton = (props) => {

    const [modalActive, setModalActive] = useState(false);

    return (

        <div>
            <MyModal
                children={props.info}
                active={modalActive}
                setActive={setModalActive}>
            </MyModal>,

            <button
                onClick={() => setModalActive(true)}
                className={classes.myBtn}>
                {props.name}
            </button>
        </div>

    );
};

export default MyButton;
