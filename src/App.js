import React from 'react';
import './index.scss';
import { useState } from 'react';

const Modal = ({ open, openModal, children}) => (
  <div className={`overlay animated ${open ? 'show' : ''}`}>
  <div className="modal">
    <svg height="200" viewBox="0 0 200 200" width="200" onClick={openModal}>
      <title />
      <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
    </svg>
    {children}
  </div>
</div>
)

function App() {
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(!open)
  }

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={openModal}>✨ Open modal</button>
        <div className={`overlay animated ${open ? 'show' : ''}`}>
          <Modal open={open} openModal={openModal}>
            <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
          </Modal>
        </div>
    </div>
  );
}

export default App;
