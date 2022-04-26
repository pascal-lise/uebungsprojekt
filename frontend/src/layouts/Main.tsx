import React from 'react';
import GameList from 'pages/GameList';
import './Main.sass';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <GameList/>
      </main>
    );
  }
}
