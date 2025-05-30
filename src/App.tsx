import { useState } from 'react';
import './App.css';
import './styles/tokens.css';
import Button  from './components/button/Button';
import Modal from './components/modal/Modal';
import ButtonToggle from './components/buttonToggle/ButtonToggle';

function App() {
  const [openModal, setOpenModal] = useState(false); //modal opening state

  return (
    <div className="App">
      <h2>Hello, Nice to meet you! Envoy engineer team 👋</h2>
      <ButtonToggle />
      
      <div className='modal-container'>
        <Button
          variant="primary"
          size="lg"
          onClick={() => setOpenModal(true)}
        >
          Open Modal
        </Button>
      </div>

      {openModal && (
        <div className='modal-contents'>
          <Modal />
          <Button
            variant="secondary"
            size="md"
            onClick={() => setOpenModal(false)}
          >
            Close
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
