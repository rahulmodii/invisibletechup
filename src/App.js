import React,{useState} from 'react'

import './App.css';
import imgs from './images/techup.jpeg'
import Modal from 'react-modal';
function App() {
  
  const allowedHeight=window.innerHeight-50;
  const allowedWidth=window.innerWidth-50;

  let marginfortop=Math.floor(Math.random() * allowedHeight);
  let marginforbottom=Math.floor(Math.random() * allowedHeight);
  let marginforleft=Math.floor(Math.random() * allowedWidth);
  let marginforright=Math.floor(Math.random() * allowedWidth);

  const showwinner = () =>{
    setstate(true)
  }
  const closeModal = ()=>{
    setstate(false)
    setstateof(false)
  }
 const [state, setstate] = useState(false)
 const [stateof, setstateof] = useState(true)
 const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
  return (
    <div className="App" >
        <div style={{height:50,width:50,cursor: 'pointer',marginTop:marginfortop,marginBottom:marginforbottom,marginLeft:marginforleft,marginRight:marginforright}} onClick={showwinner}></div>
        <Modal
        isOpen={state}
        style={customStyles}
      >
        <img src={imgs} alt="tech"  /> 
        <h3>Congratulations! You found techup labs! </h3>
        <button onClick={closeModal}>close</button>
      </Modal>
      <Modal
        isOpen={stateof}
        style={customStyles}
      >
        
        <h2>Find the Invisible TechupLabs</h2>
        <h4>Drag your mouse (or finger) around to find the techup. It’s hiding behind the shouting.</h4>
        <button onClick={closeModal}>Start Game</button>
      </Modal>
    </div>

  );
}

export default App;
