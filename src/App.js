import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '犬派？猫派？'};
  }

  handleClick(name) {
    this.setState({name: name});
  }

  render() {
    const text = 'Hello world'
    return(
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => {this.handleClick('犬派')}}>犬派</button>
        <button onClick={() => {this.handleClick('猫派')}}>猫派</button>
        { text }
      </div>
    );
  }
}

export default App;
