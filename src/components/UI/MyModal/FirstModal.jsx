import React, {useState} from 'react';
import cl from '../Button/MyButton.module.css'
import classes from "../Button/MyButton.module.css";
import RulesModal from "./RulesModal";
import MyModal from "./myModal";
import MyButton from "../Button/MyButton";

const FirstModal = () => {

    return (
        <div>

            <div className='modal-header'>
                <h1>How much do you want to a sacrifice?</h1>
            </div>
                <div className='modal-info'>
                    <div className='modal-info-form'>
                        <input className='modal-input' type="text" placeholder='150'/>
                        <img src="" alt="карандаш"/>
                        <span>ETH</span>
                    </div>

                    <div className='modal-info-form'>
                        <input className='modal-input2' type="text" placeholder='1x'/>
                        <button>Select NFT</button>
                        <img src="" alt="вопрос"/>
                    </div>
                </div>
            <div className='modal-footer'>
                <div className='main_btn'>
                    <MyButton
                        // onClick = {() => setModalActive(false)}
                        // info={<RulesModal/>}
                        name='Sacrifice!'>
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default FirstModal;
