import React from 'react';
import '../styles/App.css';
import { getDataFromApi } from '../services/Api';
import List from './List';
//import tas from './data/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
  }

  componentDidMount() {
    getDataFromApi() 
        .then(data => {
          this.setState({
            tasks: data.results,
          });
        });
      }



  render() {
    console.log(this.state.tasks);
    return (
      <div className="App">
        <List tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
