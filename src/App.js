import React from "react";
import Game from "./Components/Game"
import "./App.css";


class App extends React.Component {




  render() {
    return (
     
       
      <div className = "bg-image"> 
        <h1 className = "player">player one (X): </h1>
        <h1 className = "player">player two (O): </h1>
        <Game />
      </div>
     


    );
  }
}

export default App;



