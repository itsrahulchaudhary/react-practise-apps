import React from 'react';
// case-1
// const NewGreet = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h2>Hello  {props.name} ...{props.heroName} (Props)</h2>
//             {props.children}
//         </div>
//     );
// }

// case-2
// const NewGreet = ({ name, heroName }) => {
//     return (
//         <div>
//             <h2>Hello  {name} ...{heroName}  </h2>
//         </div>
//     );
// }

// case-3
const NewGreet = (props) => {
    const { name, heroName } = props
    return (
        <div>
            <h2>Hello  {name} ...{heroName}  </h2>
        </div>
    );
}

export default NewGreet;