import React from 'react';

function ChildComponent(props) {

    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            <button onClick={() => props.greetHandler2('child')}>Greet Parent 2</button>
        </div>
    );
}


export default ChildComponent;