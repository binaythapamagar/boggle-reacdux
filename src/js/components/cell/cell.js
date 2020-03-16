import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { cellSelected } from "../../actions/index";

class Cell extends Component {
    constructor(props){
        super(props);
    }

    handleCellClicked = () => {
        this.props.cellClicked({id:this.props.character.id,character:this.props.character.text})
    }

    render(){
        return (
            <div className="boggle" onClick = {this.handleCellClicked} >
                <span>{this.props.character.text}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
}
const mapDispatchToProps = (dispatch) => {
    return {
        cellClicked : (payload)=>{
            dispatch(cellSelected(payload));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cell);