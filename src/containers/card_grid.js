import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card/index';
import * as cardActions from '../actions/card-actions';


class CardGrid extends Component {
  handleClick(index) {
    if(this.props.shouldChangePlayer === true) {
      return
    }

    this.props.clickCard(index)
  }
  renderGrid() {
    // need to shuffle cards otherwise its too easy
    return this.props.cards.map((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          handleClick={this.handleClick.bind(this)}
          shouldChangePlayer={this.props.shouldChangePlayer}
          {...card}
        />
      );
    });
  }

  render() {
    return (
      <div className="col-md-9 grid">
        { this.renderGrid() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  return {
    cards: state.cards.cards,
    shouldChangePlayer: state.cards.shouldChangePlayer
  };
}

export default connect(mapStateToProps, cardActions)(CardGrid);
