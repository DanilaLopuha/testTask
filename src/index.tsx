import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i: number) {
    return <Square />;
  }

  render() {
    const status = 'Hi!';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <TabExample />
      </div>
    );
  }
}

class SampleText extends React.Component{
  render(){
    return(
      <div>Hello world!</div>
    );
  }
}

class TabExample extends React.Component{
  render(){
    return(
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    <SampleText />
  </Tab>
  <Tab eventKey="profile" title="Profile">
  <SampleText />
  </Tab>
</Tabs>
    );
  }
}
 

// ========================================

ReactDOM.render(
  <TabExample />,
  document.getElementById('root')
);
