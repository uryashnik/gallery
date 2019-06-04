import React from 'react';

const Test = ({onSelectAlbum}) => {
    return(
        <div onClick={() => onSelectAlbum(1)}>Внимание!!!</div>
    );
};

export default Test;
 