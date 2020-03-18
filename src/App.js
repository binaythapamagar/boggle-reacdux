import React, { Component } from 'react';
import './App.css';
import Cell from './js/components/cell/cell';
import Word from './js/components/word/word'
import { connect } from 'react-redux';

class App extends Component{
    render(){
        const {boardCharacter} = this.props
        const {currentWord} = this.props
        return(
            <div id="boggle-container">
                <div className="row">
                    <Word currentWord ={currentWord} />
                </div>
                <div id="board">
                    <div className="row">
                        <Cell character={{id:11,text:boardCharacter[0][0]}}/>
                        <Cell character={{id:12,text:boardCharacter[0][1]}}/>
                        <Cell character={{id:13,text:boardCharacter[0][2]}}/>
                        <Cell character={{id:14,text:boardCharacter[0][3]}}/>
                    </div>
                    <div className="row">
                        <Cell character={{id:21,text:boardCharacter[1][0]}}/>
                        <Cell character={{id:22,text:boardCharacter[1][1]}}/>
                        <Cell character={{id:23,text:boardCharacter[1][2]}}/>
                        <Cell character={{id:24,text:boardCharacter[1][3]}}/>
                    </div>
                    <div className="row">
                        <Cell character={{id:31,text:boardCharacter[2][0]}}/>
                        <Cell character={{id:32,text:boardCharacter[2][1]}}/>
                        <Cell character={{id:33,text:boardCharacter[2][2]}}/>
                        <Cell character={{id:34,text:boardCharacter[2][3]}}/>
                    </div>
                    <div className="row">
                        <Cell character={{id:41,text:boardCharacter[3][0]}}/>
                        <Cell character={{id:42,text:boardCharacter[3][1]}}/>
                        <Cell character={{id:43,text:boardCharacter[3][2]}}/>
                        <Cell character={{id:44,text:boardCharacter[3][3]}}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        boardCharacter : state.boardCharacter,
        currentWord : state.currentWord
    }
}

export default connect(mapStateToProps)(App);
