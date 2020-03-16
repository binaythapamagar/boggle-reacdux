import React from 'react';
import './App.css';

const App = () => (
    <div id="boggle-container">
        <div id="board">
            <div className="row">
                <div className="boggle">
                    <span>A</span>
                </div> 
                <div className="boggle">
                    <span>B</span>
                </div> 
                <div className="boggle">
                    <span>C</span>
                </div> 
                <div className="boggle">
                    <span>D</span>
                </div> 
            </div>
            <div className="row">
                <div className="boggle">
                    <span>A</span>
                </div> 
                <div className="boggle">
                    <span>B</span>
                </div> 
                <div className="boggle">
                    <span>C</span>
                </div> 
                <div className="boggle">
                    <span>D</span>
                </div> 
            </div>
            <div className="row">
                <div className="boggle">
                    <span>A</span>
                </div> 
                <div className="boggle">
                    <span>B</span>
                </div> 
                <div className="boggle">
                    <span>C</span>
                </div> 
                <div className="boggle">
                    <span>D</span>
                </div> 
            </div>
            <div className="row">
                <div className="boggle">
                    <span>A</span>
                </div> 
                <div className="boggle selected">
                    <span>B</span>
                </div> 
                <div className="boggle selected">
                    <span>C</span>
                </div> 
                <div className="boggle">
                    <span>D</span>
                </div> 
            </div>
        </div>
        <div id="word-submit"></div>
        <table id="score-table"></table>
    </div>
);

export default App;
