import React from "react";
import audio from './sound/cracker.mp3';

class AudioTest extends React.Component{

  playAudio = () => {
    new Audio(audio).play();
  }

  render() {
    return (
        <div>
          <button onMouseLeave={this.playAudio}>PLAY AUDIO</button>
        </div>
    );
  }
}

export default AudioTest;