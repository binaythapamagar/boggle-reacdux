import React,{ Component } from 'react';
import './cell.css';
import {connect} from 'react-redux';
import { cellSelected } from "../../actions/index";

class Cell extends Component {
    
    handleCellClicked = () => {
        this.props.cellClicked({id:this.props.character.id,character:this.props.character.text})
    }

    render(){
       const isNeighbour = (this.props.currentNeighbourCell.includes(this.props.character.id)) ? 'boggle-neighbour' : '';
       const isSelectedCell = (this.props.selectedCell.includes(this.props.character.id)) ? 'boggle-selected' : '';
        return (
            <div className={`boggle ${isSelectedCell} ${isNeighbour} `} onClick = {this.handleCellClicked} >
                <span>{this.props.character.text}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentNeighbourCell : state.currentNeighbourCell,
        selectedCell : state.selectedCell,
        currentCell : state.currentCell
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        cellClicked : (payload)=>{
            dispatch(cellSelected(payload));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cell);