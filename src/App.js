import React from "react";
import Game from "./Components/Game.jsx"
import "./App.css";


class App extends React.Component {


  refreshPage() {
    window.location.reload();
  }

  render() {
    return (

      <div className="bg-image">
        <button className="reset" type="button" onClick={this.refreshPage}>Restart Game</button>
        <Game />
      </div>

    );
  }
}

export default App;



