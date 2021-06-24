import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./searchMovies";

class Main extends React.Component {
  render() {
    return (
      <div class="container">
      <h1 class="title">Hello world!</h1>
      <SearchMovies/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
