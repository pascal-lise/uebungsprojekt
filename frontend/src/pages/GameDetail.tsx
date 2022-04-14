import React from 'react';

export default class GameDetail extends React.Component {
    state = {
      name: '',
      releaseDate: '',
      developer: ''
    }

    componentDidMount() {
      fetch('http://localhost:8080/game/624eb25731bdc44005f53105')
        .then(res => res.json())
        .then(
          result => {
            this.setState(result);
          },
          e => {
            this.setState({});
          }
        )
    }
    
    render() {
      return (
        <div className='game-detail'>
          <h1>{this.state.name}</h1>
          <p>{this.state.releaseDate}</p>
          <p>{this.state.developer}</p>
        </div>
      );
    }
  }