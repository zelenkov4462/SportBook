import React, {useState} from 'react';
import CurSacr from './CurSacr'
import MyButton from "./UI/Button/MyButton";
import MainBlockInfo from "./MainBlockInfo";

const MainBlock = () => {


    return (
        <div className='main_block'>
            <CurSacr/>
            <MainBlockInfo/>
        </div>
    );
};

export default MainBlock;
