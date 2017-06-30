import * as types from '../actions/action-types';

const INITIAL_STATE = {
  players: [
    {
      score: 0,
      active: true,
    },
    {
      score: 0,
      active: false
    }
  ],

  clicks: 0,
  shouldChangePlayer: false,

  cards: [
    { id: 1, active: false, matched: false, face: 'src/assets/diamond.jpg' },
    { id: 2, active: false, matched: false, face: 'src/assets/circle.jpg' },
    { id: 3, active: false, matched: false, face: 'src/assets/cube.jpg' },
    { id: 4, active: false, matched: false, face: 'src/assets/squares.jpg' },
    { id: 5, active: false, matched: false, face: 'src/assets/spiral.jpg' },
    { id: 6, active: false, matched: false, face: 'src/assets/lattice.jpg' },
    { id: 7, active: false, matched: false, face: 'src/assets/diamond.jpg' },
    { id: 8, active: false, matched: false, face: 'src/assets/circle.jpg' },
    { id: 9, active: false, matched: false, face: 'src/assets/cube.jpg' },
    { id: 10, active: false, matched: false, face: 'src/assets/squares.jpg' },
    { id: 11, active: false, matched: false, face: 'src/assets/spiral.jpg' },
    { id: 12, active: false, matched: false, face: 'src/assets/lattice.jpg' },
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CARD_CLICKED:
      if(state.clicks === 0) {
        return {
          ...state,
          cards: state.cards.map((card, index) => index === action.payload.index ?
            { ...card, active: true } :
            card
          ),

          clicks: state.clicks += 1,
        }
        }

        const firstCard =  state.cards.find(card => card.active && !card.matched);
        const secondCard = state.cards[action.payload.index];

        const matchFound = firstCard.face === secondCard.face;
        const pointsAwarded = matchFound ? 10 : 0;

        if(matchFound) {
          console.log('MATCH FOUND')
        return {
          ...state,
          cards: state.cards.map(card => {
              if(card === firstCard || card === secondCard) {
                return { ...card, active: true, matched: true }
              } else {
                return card
              }
            }
          ),

          clicks: 0,
          players: state.players.map(player => player.active ?
            { ...player, score: (player.score += pointsAwarded) } :
            player
          ),
        }
        } else {
        return {
          ...state,
          cards: state.cards.map(card => card === secondCard ?
            { ...card, active: true } :
            card
          ),
          shouldChangePlayer: true
        }
        }
    case types.CHANGE_PLAYER:
      return {
        ...state,
        clicks: 0,
        shouldChangePlayer: false,

        cards: state.cards.map(card => (card.active && !card.matched) ?
          { ...card, active: false } :
          card
        ),

        // This would need to be refactored if +2 players
        players: state.players.map(player => player.active ?
          { ...player, active: false } :
          { ...player, active: true }
          )
        }

    default:
      return state;

  }
}
