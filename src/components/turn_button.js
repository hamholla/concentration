import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as cardActions from '../actions/card-actions';

class TurnButton extends Component {

  render() {
    return (
      <div className="btn btn-primary" style={{display: this.props.shouldChangePlayer ? 'block' : 'none' }} onClick={ () => this.props.changePlayer() }>
        Change Player
      </div>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  return {
    shouldChangePlayer: state.cards.shouldChangePlayer
  };
}

export default connect(mapStateToProps, cardActions)(TurnButton);
