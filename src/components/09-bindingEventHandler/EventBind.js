import React, { Component } from "react";

class EventBind extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: 'Hello'
        }
        {/* Approach-3 */ }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Approach-1 */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* Approach-2 */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* Approach-3 */}
                <button onClick={this.clickHandler}>Click</button>

            </div>
        );
    }
}

export default EventBind;