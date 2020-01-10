import React from 'react';
import '../styles/App.css';
import { fetchTasks } from '../services/Api';
import AllTasks from './AllTasks';
//import tas from './data/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: [],

    }

  }

  componentDidMount() {
    fetchTasks() 
        .then(data => {
          this.setState({
            allTasks: data.results,
          });
          console.log(this.state.allTasks);
        });
      }



  render() {
    return (
      <div className="App">
        <AllTasks allTasks={this.state.allTasks} />
      </div>
    );
  }
}

export default App;
