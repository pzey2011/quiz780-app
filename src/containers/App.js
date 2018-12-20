import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import { Question } from '../components/question';
import { Result } from '../components/result';
import { increaseStep , resetStep } from '../actions/mainActions';
import { setUserAnswer , resetUserAnswers } from '../actions/questionActions';
import { increaseTimer,resetTimer,resetThisTimer } from '../actions/counterActions';

class App extends Component {
  constructor() {
        super();
        this.myInterval=function(){}
        this.startTimer=this.startTimer.bind(this);
  }
  startTimer(){
      this.myInterval = setInterval( () => {
        this.props.increaseTimer();
      }, 1000 );
  }
  componentDidMount(){
    
    this.startTimer();
  }
  render() {
    return (
      <div className="container">
            <div className="row">
                <div className="col-md-12">
                  <div className="text-center">
                    <button onClick={() => { clearInterval(this.myInterval); this.startTimer(); this.props.resetTimer(); this.props.resetUserAnswers();this.props.resetStep()}} className="btn btn-success text-center">از نو شروع کن</button>
                  </div>
                  <div style={{display: (this.props.main.step===0)?'':'none'}}>
                    <Question 
                    id={0}
                    nth={'اول'} 
                    timer={Math.floor(this.props.timer.this_time / 3600)+"ساعت - "+Math.floor(this.props.timer.this_time % 3600 / 60)+"دقیقه - "+Math.floor(this.props.timer.this_time % 3600 % 60)+"ثانیه"}
                    title={this.props.questions.datas[0].title} 
                    answers={this.props.questions.datas[0].answers} 
                    setAnswer={(answer,timer)=> {this.props.setQuestionAnswer(0,answer,timer)}} 
                    selectedAnswer={this.props.questions.datas[0].user_answer} 
                    nextStep = {()=> {this.props.resetThisTimer();this.props.nextStep()}}
                    />
                  </div>
                  <div style={{display: (this.props.main.step===1)?'':'none'}}>
                    <Question 
                    id={1}
                    nth={'دوم'}
                    timer={Math.floor(this.props.timer.this_time / 3600)+"ساعت - "+Math.floor(this.props.timer.this_time % 3600 / 60)+"دقیقه - "+Math.floor(this.props.timer.this_time % 3600 % 60)+"ثانیه"}
                    title={this.props.questions.datas[1].title} 
                    answers={this.props.questions.datas[1].answers} 
                    setAnswer={(answer,timer)=> {this.props.setQuestionAnswer(1,answer,timer)}} 
                    selectedAnswer={this.props.questions.datas[1].user_answer} 
                    nextStep = {()=> {this.props.resetThisTimer();this.props.nextStep()}}
                    />
                   </div>
                  <div style={{display: (this.props.main.step===2)?'':'none'}}>
                    <Question
                    id={2} 
                    nth={'سوم'} 
                    timer={Math.floor(this.props.timer.this_time / 3600)+"ساعت - "+Math.floor(this.props.timer.this_time % 3600 / 60)+"دقیقه - "+Math.floor(this.props.timer.this_time % 3600 % 60)+"ثانیه"}
                    title={this.props.questions.datas[2].title} 
                    answers={this.props.questions.datas[2].answers} 
                    setAnswer={(answer,timer)=> {this.props.setQuestionAnswer(2,answer,timer)}} 
                    selectedAnswer={this.props.questions.datas[2].user_answer} 
                    nextStep = {()=> {clearInterval(this.myInterval);this.props.nextStep()}}
                    />
                 </div>
                 <div style={{display: (this.props.main.step===3)?'':'none'}}>
                    <Result
                    questions={this.props.questions}
                    totalTime={Math.floor(this.props.timer.total_time / 3600)+"ساعت - "+Math.floor(this.props.timer.total_time % 3600 / 60)+"دقیقه - "+Math.floor(this.props.timer.total_time % 3600 % 60)+"ثانیه"}
                    />
                 </div>
                </div>
            </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
    return{
        main: state.main,
        questions: state.questions,
        timer: state.counter
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
        nextStep: () => {
          dispatch(increaseStep(1));
        },
        setQuestionAnswer: (id,answer,timer) =>{
          dispatch(setUserAnswer(id,answer,timer));
        },
        increaseTimer: () =>{
          dispatch(increaseTimer());
        },
        resetTimer: () =>{
          dispatch(resetTimer());
        },
        resetThisTimer: () =>{
          dispatch(resetThisTimer());
        },
        resetStep: () =>{
          dispatch(resetStep());
        },
        resetUserAnswers: ()=>{
          dispatch(resetUserAnswers());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
//this.props.setQuestionAnswer(0,answer)