import React from 'react';
import RecognitionResult from './RecognitionResult';

const RecognitionList = props => {

  const recognitionItems = props.fields.map(field => {
    //console.log("Creating recog list");
    console.log(field);
    var value = '';
    if (field.recognition_results.length > 0 && field.recognition_results[0].recognition_candidates)
        value = field.recognition_results[0].recognition_candidates[0].value
    
    return <RecognitionResult key={field.id} id={field.id} text={value}/>;
  });
  //console.log('Setting recog list');
  return <div>{recognitionItems}</div>;

};

export default RecognitionList;