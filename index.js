import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
      <div class="container">
      <h1>Hello world!</h1>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
