import React, {useState} from 'react';
import './App.css';
import machinelogo from './images/machinlogo.jpg';

const projectName = "DRUMER";


// First voice Data
const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];


function App() {
  const [volume, setVolume] = React.useState(1);
  const [isClicked, setIsClicked] = React.useState(false);
  const [on, setOn] = React.useState('On');

    function clicking() {
      setIsClicked(!isClicked);
      if(!isClicked){
        setOn('Off');
      } else {
        setOn('On');
      }

    }
    
    

    const pudsOff = isClicked
    ? {
      position: 'absolute',
      left: '-1500px',
      top: '247.5px',
      transition: '4s ease'
      
    } 
    : {
      left: '330px',


    }


    const powerSlider = !isClicked
      ? {
          justifyContent: 'flex-start',
          transition: '0.8s ease'

        }
      : {
          justifyContent: 'flex-end',
          backgroundColor: 'rgb(140, 130, 168)',
          transition: '0.8 ease'
        };
        const littleCircle = isClicked 
        ? {
          backgroundColor: 'white'
        }
        : {
        
        };
  

  return (
    <div className="App">
      <img className="img1" src={machinelogo} alt="Drum Machine Logo"/>

      <div className="main-container">
          
        <div className="main-puds" style={pudsOff}>
      {bankOne.map(clip => (
        <Pad  key={clip.id} clip={clip}
        volume={volume}/>
      ))};
    </div>

        <div className="right-side">
      <h3 style={{color: 'white', padding: '10px', letterSpacing: '2px'}}>Volume</h3>
      <input 
      className="input-style-range" type="range" 
      name="volume"
      id="volume"
      step="0.01"
      value={volume}
      min="0" 
      max="1"
      onChange={(e) => setVolume(e.target.value)} />

      <h3 style={{color: 'white', padding: '10px', marginTop: '15px', letterSpacing: '1px'}} >Power <span className="spanWord">{on}</span></h3>
      <div onClick={clicking} className="power-off" style={powerSlider}>
        <button className="offVolume" style={littleCircle}></button>
      </div>

    </div>

      </div>
    </div>
  );
}
    
  

function Pad( {clip, volume} ) {

  React.useEffect( () => {
    document.addEventListener('keydown', handleKeyPress); 
    return() => {
    document.removeEventListener('keydown', handleKeyPress);  

    } 
  }, [])

  const handleKeyPress = (e) => {
    if(e.keyCode === clip.keyCode) {
      playSound();
    }
  }

const playSound = () => {
  const audioTag = document.getElementById(clip.keyTrigger);
  audioTag.volume = volume;
  audioTag.currentTime = 0;
  audioTag.play();
  
}

  return (
    <div onClick={playSound} className="pad drum-pud1">
      <audio className="clip" id={clip.keyTrigger} src={clip.url}/>
      {clip.keyTrigger}
    </div>
  );
}



export default App;
