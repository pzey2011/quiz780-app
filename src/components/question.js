import React from 'react';
import $ from'jquery/dist/jquery.js';
import 'parsleyjs/dist/parsley.js';


export const Question =(props)=> {
	var handleSubmit = (e) =>{
		e.preventDefault();
		if($('#my-form'+props.id).parsley().validate())
		{
			props.setAnswer(props.answers[0],props.timer);
			props.nextStep();
		}
	
	}
	return (
		<React.Fragment>
    	<p className="text-right">{'زمان سپری شده: '+(props.timer)}</p>        
		 <div className="card my-card">
            <div className="card-body">
                <h4 className="card-title">{'سوال '+(props.nth)}</h4>
                
                <h6 className="text-muted card-subtitle mb-2"><br />{props.title}<br /><br /></h6>
					<form id={"my-form"+(props.id)} onSubmit={(e)=>handleSubmit(e)}>
						<div className="form-group text-right">
							<div className="form-check">
								<input className="form-check-input" type="radio" id="formCheck-1" data-parsley-required
								name="answers"
								data-parsley-multiple="answers"
								data-parsley-required-message="لطفا یکی از گزینه ها را انتخاب کنید"
								value={props.answers[0]}
								checked={props.selectedAnswer === props.answers[0]}
							   	onChange={(e)=>
								    props.setAnswer(props.answers[0],props.timer)
								}
								/>
								<label className="form-check-label" htmlFor="formCheck-1">{props.answers[0]}</label>
							</div>
						</div>
						<div className="form-group text-right">
							<div className="form-check">
							    <input className="form-check-input" type="radio" id="formCheck-2"
							    name="answers"
							    data-parsley-multiple="answers"
							    data-required-message="لطفا یکی از گزینه ها را انتخاب کنید"
							    value={props.answers[1]}
							    checked={props.selectedAnswer === props.answers[1]}
							   	onChange={(e)=>
								    props.setAnswer(props.answers[1],props.timer)
								}
							    />
							    <label className="form-check-label" htmlFor="formCheck-2">{props.answers[1]}</label>
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
