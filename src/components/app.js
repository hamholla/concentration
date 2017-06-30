import React, { Component } from 'react';
import CardGrid from '../containers/card_grid';
import PlayerList from '../containers/player_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Concentration<small> (2 players)</small></h1>
          <div className="row">
            <div className="col-md-6">
              <p>Take turns flipping cards over to find a match. 1 match = 10 points. If you miss a match it's the next players turn. Game ends when all cards are flipped. Refresh to restart.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <PlayerList />
            <CardGrid />
          </div>
        </div>
      </div>
    );
  }
}
