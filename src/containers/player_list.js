import React, { Component } from 'react';
import { connect } from 'react-redux';
import Player from '../components/player';
import TurnButton from '../components/turn_button';


class PlayerList extends Component {
  renderPlayers() {
    return this.props.players.map((player, index) => {
      return (
        <Player
          key={index}
          index={index}
          {...player}
        />
      );
    });
  }

  render() {
    return (
      <div className="col-md-3 list-group">
        { this.renderPlayers() }
        <TurnButton />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  return {
    players: state.cards.players,
  };
}

export default connect(mapStateToProps)(PlayerList);
