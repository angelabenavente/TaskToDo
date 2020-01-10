import React from 'react';
import '../styles/App.css';
import { getDataFromApi } from '../services/Api';
import List from './List';
import Detail from './Detail';
import { Router, Route, Switch } from 'react-router-dom';

//import tas from './data/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      id: ''
    }
    this.handleTaskIdStatus = this.handleTaskIdStatus.bind(this);
  }

  componentDidMount() {
    getDataFromApi() 
        .then(data => {
          this.setState({
            tasks: data.results,
          });
        });
      }


    handleTaskIdStatus(taskID) {
      this.setState({
        id: taskID,
      });
      console.log(this.state.id)
    }

  render() {
    console.log(this.state.tasks);
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <List handleTaskIdStatus={this.handleTaskIdStatus} tasks={this.state.tasks}/>
          </Route>
          <Route>
            <Detail path="/detail"/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;