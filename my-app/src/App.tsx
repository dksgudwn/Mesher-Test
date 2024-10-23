import React, { useState } from 'react';
import './App.css';
import TokenInput from './components/tokenInput'
import SwapButton from './components/SwapButton';
import Modal from './components/Modal';

function App() {

  const handleAlert = () => { alert("준비 중입니다") };
  const [amountFrom, setAmountFrom] = useState<string>('');
  const [amountTo, setAmountTo] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalValue, setValueModalInput] = useState<string>('');

  const handleAmountFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmountFrom(value);

    setAmountTo(calculateAmount(value));

  }

  const handleAmountToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmountTo(value);

    setAmountFrom(calculateAmountReverse(value));
  }

  const onModal = () => {
    setIsModalOpen(true);
  }

  const offModal = () => {
    setIsModalOpen(false);
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValueModalInput(value);
  }

  const calculateAmount = (value: string) => ((parseFloat(value) * 2).toFixed(10));
  const calculateAmountReverse = (value: string) => ((parseFloat(value) / 2).toFixed(10));

  // const App: React.FC = () => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   const toggleModal = () => {
  //     setIsModalOpen(!isModalOpen);
  //   };


  return (
    <div className="App">
      <header className="App-header">
        {
          isModalOpen ?
            <div>


              <Modal
                value={modalValue}
                onValueChange={setValueModalInput}
                onModal={offModal}
              />

              
            </div>
            :
            <div className="swap-container">
              <div className='swap-header'>
                <h3> 스왑</h3>
                <button className='settings-button' onClick={handleAlert}> ⚙️</button>
              </div>

              <TokenInput
                amount={amountFrom}
                name='asd'
                isFocused={true}
                onModal={onModal}
                onAmountChange={handleAmountFromChange}
                setIsFocused={() => { setAmountFrom("") }}
              />

              <div className="swap-arrow">↓</div>

              <TokenInput
                amount={amountTo}
                name='asd'
                isFocused={true}
                onModal={onModal}
                onAmountChange={handleAmountToChange}
                setIsFocused={() => { setAmountTo("") }}
              />


              <SwapButton
                amountFrom={amountFrom}
                amountTo={amountTo}
                swapEvent={handleAlert}

              />
            </div>
        }
      </header>
    </div>
  );
}


export default App;