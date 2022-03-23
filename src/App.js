import {useState} from "react";
import Header from './components/Header'
import './styles/App.css'
import MainBlock from "./components/MainBlock";
import Footer from "./components/Footer";
import React from "react";
import MyModal from "./components/UI/MyModal/myModal";
import MyButton from "./components/UI/Button/MyButton";
import FirstModal from "./components/UI/MyModal/FirstModal";


function App() {

    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="App">
            <button onClick={() => setModalActive(true)}>Открыть модальное окно</button>
            <MyModal children={123456} active={modalActive} setActive={setModalActive}>
                {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus dolorem dolores ea earum eveniet facere id maiores molestiae non odit omnis, quam quis ratione sequi soluta suscipit, totam voluptate!*/}
                {/*</p>*/}
            </MyModal>
            <Header/>
            <MainBlock/>
            <div className='main_btn'>
                <MyButton
                    info={<FirstModal/>}
                    name='Connect wallet'>
                </MyButton>
            </div>
            <div className='main_btn'>
                <MyButton
                    info="А вот и вторая модалка"
                    name='Connect wallet'>
                </MyButton>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
