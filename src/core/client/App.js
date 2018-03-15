import React, { Component } from 'react';
import './App.scss';
import Header from "./ui/component/Header/Header";
import SideBar from "./ui/component/SideBar/SideBar";

class App extends Component {
  render() {
    return (
      <div className="App container-fluid ml-0 mr-0 h-100">
        <div className="row h-100">
          <SideBar/>
          <main className="main d-flex flex-column col pl-0 pr-0">
            <Header class={"col d-flex"}/>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
