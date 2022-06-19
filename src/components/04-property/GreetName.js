import React from 'react';

const GreetName = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Hello  {props.name} ...{props.heroName} (Props)</h2>
            {props.children}
        </div>
    );
}

export default GreetName;