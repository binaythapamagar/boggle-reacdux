import {START_GAME ,CELL_SELECTED, WORD_SUBMIT} from '../constants/index';

//on start game which we may use later to distinguish games
const startGame = (payload) => {
    return { type:START_GAME, payload}
}

//on any cell selected
const cellSelected = (payload) => {
    return {  type:CELL_SELECTED, payload }
}

//on submit button clicked while submitting word
const submitWord = (payload) => {
    return { type:WORD_SUBMIT, payload}
}

export {
 startGame,
 cellSelected,
 submitWord   
}