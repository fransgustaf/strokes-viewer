import React from 'react'

const RecognitionResult = props => {
	console.log("rendering recog result");
	return (
       	<div className="result">{props.text}</div>
	);	
};

export default RecognitionResult;