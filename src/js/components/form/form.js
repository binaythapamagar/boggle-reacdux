import React, { Component } from 'react';
import './form.css';
import { submitWord } from '../../actions/index';
import { connect }  from 'react-redux';
import axios from 'axios';

class Form extends Component {

    handleSubmit = () => {
        this.props.submitWord({currentWord:this.props.currentWord});
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="form-group"> 
                        <input className="form-control" id="currentWord" value={this.props.currentWord} readOnly/>
                    </div>  
                </div>
                <div className="col-md-4">
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        currentWord : state.currentWord
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        submitWord : (currentWord)=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function(res){
                res.data = {isValid:true,message:`${currentWord.currentWord} is a valid word`,currentWord:currentWord.currentWord}
                dispatch(submitWord(res.data))
            })
            .catch(function(res){
                res.data = {isValid:false,message:`${currentWord.currentWord} is Not a valid word`,currentWord : currentWord.currentWord}
                dispatch(submitWord(res.data))
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form);