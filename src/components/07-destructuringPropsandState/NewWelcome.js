import React, { Component } from "react";

// case-1
// class NewWelcome extends Component {
//     render() {
//         return <h2>Welcome {this.props.name} .... {this.props.heroName} (Props)</h2>
//     }
// }

// case-2
class NewWelcome extends Component {
    render() {
        const { name, heroName } = this.props
        // const {state1, state2} = this.sate
        return <h2>Welcome {name} .... {heroName}</h2>
    }
}


export default NewWelcome;