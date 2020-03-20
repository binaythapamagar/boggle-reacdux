import { CELL_SELECTED,WORD_SUBMIT,STOP_GAME, START_GAME} from "../constants";

const intialState = {
    stopGame : false,
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
    message : undefined,
    timeLimit : 5000
}

function rootReducer (state = intialState , action){
    if(action.type == START_GAME){
        return Object.assign( {}, state, {
            boardCharacter : action.payload
        });
    }
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
    if(action.type === WORD_SUBMIT){ 
        if(action.payload.isValid){
            console.log(action.payload)
             return Object.assign( {}, state, {
                currentWord: '',
                currentNeighbourCell : [],
                currentCell : null,
                selectedCell : [],
                score : state.score + parseInt(action.payload.currentWord.length),
                message :action.payload.message,
                scoredWords : [...state.scoredWords,action.payload.currentWord]
            });
        }else{
            return Object.assign( {}, state, {
                currentWord: '',
                currentNeighbourCell : [],
                currentCell : null,
                message :action.payload.message,
                selectedCell : []
            });
        } 
    }
    if(action.type === STOP_GAME ){
        return Object.assign( {}, state, {
           stopGame : true
        });
        // console.log('time outhg');
        // clearInterval(this.interval)
        // this.timeout = new Date()*1 + state.timeLimit
        // this.interval = setInterval(() => {
        //   if (new Date() > this.timeout) {
        //     clearInterval(this.interval)
        //     console.log('time out');
        //     return Object.assign( {}, state, {
        //         timeLimit : 0
        //     });
        //   }
        //   console.log(this.timeout);
    
        // }, 1000)
    }
    return state;
}

export default rootReducer;