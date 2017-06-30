import {
  CARD_CLICKED,
  CHANGE_PLAYER,
} from './action-types';

export const clickCard = (index) => {
  return {
    type: CARD_CLICKED,
    payload: {index}
  }
}

export const changePlayer = () => {
  return {
    type: CHANGE_PLAYER
  }
}
