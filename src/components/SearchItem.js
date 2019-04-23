import React from 'react';

const SearchItem = props => {
    return (
        <div onClick={props.onItemClick} value={props.id}>
            {props.text}
        </div>
    );
};

export default SearchItem;