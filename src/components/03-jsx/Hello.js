import React from "react";

const Hello = () => {
    // Using JSX

    // return (
    //     <div className="dummyClass">
    //         <h2>Hello Rahul (JSX)</h2>
    //     </div>
    // );

    // Without Using JSX
    return React.createElement(
        'div',
        { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'Hello Rahul (JSX)')
    );
}

export default Hello;