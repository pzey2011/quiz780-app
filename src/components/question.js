import React from 'react';
import $ from'jquery/dist/jquery.js';


export const Question =(props)=> {
	var handleValidation = () =>{
		let isValid=true;
		if(!document.getElementById("formCheck1_"+(props.id)).checked && !document.getElementById("formCheck2_"+(props.id)).checked)
		{
			$("#questionsError"+props.id).css('display', 'block'); 
			$("#questionsError"+props.id).text('لطفا یکی از گزینه ها را انتخاب کنید' );
			isValid=false;
		}
		else{
			$("#questionsError"+props.id).css('display', 'none'); 
		}
		return isValid;
	}
	var handleSubmit = (e) =>{
		e.preventDefault();
		if(handleValidation())
		{
			props.nextStep();
		}
	
	}
	return (
		<React.Fragment>
    	<p className="text-right">{'زمان سپری شده: '+(props.timer)} <img src="img/stopwatch.png" alt="timer"></img></p>      
		 <div className="card my-card text-center">
            <div className="card-body">
                <h4 className="card-title">{'سوال '+(props.nth)}</h4>        
                <h6 className="text-muted card-subtitle mb-2"><br />{props.title}<br /><br /></h6>
                <p id={"questionsError"+(props.id)} style={{ color: "red" ,textDecoration: 'none' , display: "none"}}></p>
				<form className="form" id={"my-form"+(props.id)} onSubmit={(e)=>handleSubmit(e)}>
					<div className="form-group text-right" onClick={()=>{
						props.setAnswer(props.answers[0],props.timer);
						$("#questionsError"+props.id).css('display', 'none');
					}}>
						<div className="form-check">
							<input className="form-check-input" name="answer-input" type="radio" id={"formCheck1_"+(props.id)} 
							value={props.answers[0]}
							checked={props.selectedAnswer === props.answers[0]}
						   	
							/>
							<label className={"form-check-label "+(props.selectedAnswer === props.answers[0]?'selected':'')} htmlFor="formCheck-1">{props.answers[0]}</label>
						</div>
					</div>
					<div className="form-group text-right" onClick={()=>{
						props.setAnswer(props.answers[1],props.timer);
						$("#questionsError"+props.id).css('display', 'none');
					}}>
						<div className="form-check">
						    <input className="form-check-input"  name="answer-input"  type="radio" id={"formCheck2_"+(props.id)}
						    value={props.answers[1]}
						    checked={props.selectedAnswer === props.answers[1]}
						   	
						    />
						    <label className={"form-check-label "+(props.selectedAnswer === props.answers[1]?'selected':'')} htmlFor={"formCheck2_"+(props.id)}>{props.answers[1]}</label>
					    </div>
					</div>
					<div className="form-group text-center">
						<button type="submit" className="btn btn-primary">ثبت</button>
					</div>
			   </form>    
            </div>
        </div>
		</React.Fragment>
	);
}
