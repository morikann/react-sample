import React from 'react';
import './practice.css';
import Language from './Language';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

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
    const languageList = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
      },
      {
        name: 'Ruby',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg'
      },
      {
        name: 'Ruby on Rails',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg'
      },
      {
        name: 'Python',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg'
      }
    ];

    return(
      <div>
        <Header />
        <Main />
        <Footer />
        <div>{ divide }</div>
        <h1 className="title">{ this.state.name }</h1>
        <button onClick={() => {this.handleClick('犬派')}}>犬派</button>
        <button onClick={() => {this.handleClick('猫派')}}>猫派</button>

        <div>{ divide }</div>

        <p>{ this.state.count }</p>
        <button onClick={ () => {this.countUp()} }>+</button>

        <div>{ divide }</div>

        { languageList.map((languageItem) => {
          return(
            <Language 
              name = { languageItem.name }
              image = { languageItem.image }
            />
          )
        })}

        <div>{ divide }</div>
      </div>
    );
  }
}

export default App;
