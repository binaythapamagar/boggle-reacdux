import { CELL_SELECTED } from "../constants";

const intialState = {
    boardCharacter : [
                            ['A','S','A','P'],
                            ['C','L','R','H'],
                            ['M','O','S','S'],
                            ['A','P','A','A']
                     ],
    scoredWords : [],
    score : 0,
    currentWord : '',
    currentCell : null,
    selectedCell : [],
    currentNeighbourCell : [],
    timeLimit : 180
}

function rootReducer (state = intialState , action){
    if(action.type === CELL_SELECTED){
        var cellRow = parseInt(action.payload.id / 10);
        var cellColumn = action.payload.id % 10;
        if(!state.selectedCell.includes(action.payload.id) && (state.currentNeighbourCell.length === 0 || state.currentNeighbourCell.includes(action.payload.id))){
            //get neighbour cells
            var neighbour = [];
            for (let i = 1; i <= 4; i++) {
                //distance of cell with left and right column cells
                var sideDistance = Math.sqrt( (cellRow - i)*(cellRow - i) + 1 );
                if(sideDistance === 1 || sideDistance ===  Math.sqrt(2)){
                    if(cellColumn > 1 && cellColumn < 4){
                        neighbour.push((i*10)+(cellColumn-1))
                        neighbour.push((i*10)+(cellColumn+1))    
                    }else if( cellColumn > 1){
                        neighbour.push((i*10)+(cellColumn-1))
                    }else{
                        neighbour.push((i*10)+(cellColumn+1))    
                    }
                }
                var withDistance = Math.sqrt((cellRow - i)*(cellRow - i));
                if(withDistance === 1){
                    neighbour.push(((i)*10)+cellColumn)
                }
            }
            return Object.assign( {}, state, {
                currentWord: state.currentWord.concat(action.payload.character),
                currentNeighbourCell : neighbour,
                currentCell : action.payload.id,
                selectedCell : state.selectedCell.concat(action.payload.id)
            });
        }
    }
    return state;
}

export default rootReducer;