import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '犬派？猫派？',
      count: 0
    };
  }

  handleClick(name) {
    this.setState({name: name});
  }

  countUp() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    const divide = '-----------------------------------------------'
    return(
      <div>
        <h1>{ this.state.name }</h1>
        <button onClick={() => {this.handleClick('犬派')}}>犬派</button>
        <button onClick={() => {this.handleClick('猫派')}}>猫派</button>

        <div>{ divide }</div>

        <p>{ this.state.count }</p>
        <button onClick={ () => {this.countUp()} }>+</button>
      </div>
    );
  }
}

export default App;
