import React, { useEffect } from 'react';
import './App.css';

function App() {

  const keys = [
    {
      key: "Q",
      sound: 'H1',
      html: "Heater 1",
      audioSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      key: "W",
      sound: 'H2',
      html: "Heater 2",
      audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      key: "E",
      sound: 'H3',
      html: "Heater 3",
      audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      key: "A",
      sound: 'H4',
      html: "Heater 4",
      audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      key: "S",
      sound: 'Clap',
      html: "Clap",
      audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      key: "D",
      sound: 'OpHH',
      html: "Open HH",
      audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      key: "Z",
      sound: 'KNH',
      html: "Kick n\'\ Hat",
      audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      key: "X",
      sound: 'K',
      html: "Kick",
      audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      key: "C",
      sound: 'CHH',
      html: "Closed HH",
      audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
  ]

  // useEffect(() => {
  //   const playKey = (event) => {
  //     const findKey = keys.find(key => key.key.toLowerCase() === event.key)
  //       document.getElementsByClassName(keys.sound)[0].play()
  //       document.getElementById('display').innerText = keys.html;
  //   }

  //   document.addEventListener('keydown', playKey);
  
  // }, [])

 
    


  return (
    <div id='drum-machine' className='drum-machine' >
      <div className='container-fluid'>
        <div className='drum-kit' >
        {keys.map((entry) => 
          <button onClick={() => {
            document.getElementsByClassName(entry.sound)[0].play();
            document.getElementById('display').innerText = entry.html
            }} onKeyDown={(event) => {
              const findKey = keys.find(key => key.key.toLowerCase() === event.key)
              document.getElementsByClassName(entry.sound)[0].play();
              document.getElementById('display').innerText = entry.html
            }} id={entry.key} className='drum-pad'>{entry.key}
            <audio id={entry.key} className={`${entry.sound} clip`} src={entry.audioSource}/>
          </button>)}
        </div>
        <div id='display'>
        </div>

      </div>
    </div>
  );
}

export default App;
