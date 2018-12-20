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
			<br /><br /><br />
			<h4 className="text-center">نتایج</h4>
			<br /><br />
			{results}
            		

		</React.Fragment>
	);
};