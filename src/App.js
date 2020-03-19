import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cell from './js/components/cell/cell'; 
import Form from './js/components/form/form';
import { connect } from 'react-redux';

class App extends Component{

    render(){
        const {boardCharacter} = this.props 
        return(
            <>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Form/>   
                </div>
            </div> 
            <div className="row"> 
                <div className="col-md-4">
                    <div className="score-board">
                        <h3>Total Score : {this.props.score} </h3>
                    </div>
                    <div className="selected-words">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Words</th>
                            <th scope="col">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.scoredWords.map((word,i)=>{
                                return(<tr key={i}><td>{word}</td><td>{word.length}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="col-md-4">
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
                    {this.props.message }
                </div> 
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        message : state.message,
        boardCharacter : state.boardCharacter,
        currentWord : state.currentWord,
        score : state.score,
        scoredWords : state.scoredWords
    }
}

export default connect(mapStateToProps)(App);
