import {cellSelected , submitWord} from "../actions/index";

const intialState = {
    scoredWords : [],
    score : 0,
    currentWord : '',
    currentCell : null,
    currentNeighbourCell : []
}

function rootReducer (state = intialState , action){
    if(action === cellSelected){
        return Object.assign( {}, state, {
            currentWord: state.currentWord.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;