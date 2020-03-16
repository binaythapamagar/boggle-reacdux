import { CELL_SELECTED } from "../constants";

const intialState = {
    boardCharacter : [['A','B','C','D'],['A','B','C','D'],['A','B','C','D'],['A','B','C','D']],
    scoredWords : [],
    score : 0,
    currentWord : '',
    currentCell : null,
    currentNeighbourCell : [],
    timeLimit : 180
}

function rootReducer (state = intialState , action){
    if(action.type === CELL_SELECTED){
        return Object.assign( {}, state, {
            currentWord: state.currentWord.concat(action.payload.character)
        });
    }
    return state;
}

export default rootReducer;