import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class CountButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {total: 0}
    this.isClicked = this.isClicked.bind(this);
    this.textCheck = this.textCheck.bind(this);
    this.imageCheck = this.imageCheck.bind(this);
  }
  isClicked() {
    this.state.total++;
    this.setState(state => ({butText: this.textCheck}));
  }
  textCheck() {
    if(this.state.total < 50){
      return 'more.';
    }
    if(this.state.total < 100){
      return 'More.';
    }
    return 'MORE!';
  }
  imageCheck() {
    if(this.state.total >= 100){
      return (
        <img className="pogU"
          src = {'https://i.kym-cdn.com/photos/images/original/001/791/790/48d.png'}
          />
      );
    }
    return null;
  }
  render() {
    return(
      <div>
      <h1>Hello! You have pressed the button {this.state.total} times!</h1>
      <button onClick={this.isClicked}>
        {this.textCheck()}
      </button>
      <br></br>
      {this.imageCheck()}
      </div>
    );
  }
}

ReactDOM.render(<CountButton />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
