import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {

    return (
        <div>
            {/* <button onClick={() => props.updateState(0)}>Header</button> */}
            <button onClick={() => props.updateState(1)}>About</button>
            <button onClick={() => props.updateState(2)}>Portfolio</button>
            <button onClick={() => props.updateState(3)}>Resume</button>
            <button onClick={() => props.updateState(4)}>Contact</button>
        </div>
    );
}

export default Nav;