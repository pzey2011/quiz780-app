import React from 'react';
export const Result =(props)=> {
	let results=props.questions.datas.map((object) =>
	{

		return(
			<div className="card my-card">
            	<div className="card-body">
					<h4 className="text-muted card-title"><br />{'سوال : '+(object.title)}<br /><br /></h4>
					<p class="card-text">{'پاسخ شما: '+(object.user_answer)}</p>
					<p class="card-text">{'زمان پاسخ شما: '+(object.time_elapsed)}</p>
				</div>
			</div>
		);
	});
	return (
		<React.Fragment>
			<br />
			<h4 className="text-center">نتایج</h4>
			<h6 className="text-right">{'زمان سپری شده ی کل: '+(props.totalTime)}<img src="img/stopwatch.png" alt="timer"></img></h6>
			<br />
			{results}
            		

		</React.Fragment>
	);
};