import React from 'react';
export default class GameDetail extends React.Component {
    state = {
      name: '',
      releaseDate: '',
      dev: ''
    }

    async componentDidMount() {
      try {
        const result = await fetch(`${process.env.REACT_APP_API_URL}/game/624eb25731bdc44005f53105`)
        this.setState(await result.json())
      } catch(e) {
        this.setState({});
      }
    }
    
    render() {
      return (
        <div className='game-detail'>
          <h1>{this.state.name}</h1>
          <p>{this.state.releaseDate}</p>
          <p>{this.state.dev}</p>
        </div>
      );
    }
  }