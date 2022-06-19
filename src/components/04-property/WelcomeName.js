import React, { Component } from "react";

class WelcomeName extends Component {
    render() {
        return <h2>Welcome {this.props.name} .... {this.props.heroName} (Props)</h2>
    }
}

export default WelcomeName;