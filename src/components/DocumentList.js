import React from 'react';
import SearchItem from './SearchItem';


const DocumentList = props => {

  const documentItems = props.documents.map(document => {
    //console.log("Creating list");
    return <SearchItem onItemClick={props.onItemClick} key={document.id} id={document.id} text={document.name}/>;
  });
  //console.log('Setting document list');
  return <div>{documentItems}</div>;

};

export default DocumentList;