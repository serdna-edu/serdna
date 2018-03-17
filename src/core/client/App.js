import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';
import Header from './ui/component/Header/Header';
import SideBar from './ui/component/SideBar/SideBar';
import Overview from './ui/section/Overview/Overview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};

    this.setTitle = this.setTitle.bind(this);
  }

  setTitle(title) {
    this.setState({ title });
  }

  render() {
    return (
      <div className="serdna-app container-fluid ml-0 mr-0 h-100">
        <div className="row h-100">
          <SideBar/>
          <main className="d-flex flex-column col pl-0 pr-0 h-100">
            <Switch>
              <Route exact path="/"
                     render={() => <Redirect to="/dashboard"/>} />
              <Route exact path="/:section"
                     render={props => <Header {...props} className={'col d-flex'} />} />
            </Switch>

            <div className={'container-fluid serdna-app__main-content'}>
              <div className={'row'}>
                <div className={'col-12'}>
                  <Switch>
                    <Route exact path="/dashboard" component={Overview}/>
                  </Switch>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
