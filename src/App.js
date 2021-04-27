import React from "react";
import Game from "./Components/Game"
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component {

  refreshPage() {

    window.location.reload();
  }

  render() {
    return (
      <div className="container-fluid p-3">
        <div className="row">
          <div className="btn btn-dark bg-image">
            <button className='resetBtn m-4' type='button' onClick={this.refreshPage} >Restart</button>
            <Game />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
