
import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Jennie',
        address: 'Kim',
        age: 26
    };

    handleClick() {
        console.log("call me", this.state.name);
    }
    handleOnMoverOver(event) {
        console.log(event.pageX);
    }

    render() {
        return (
            <div>My first MyComponent<button onMouseOver={this.handleOnMoverOver}>Call me</button>
                {this.state.name} {this.state.address} {this.state.age}
                <button onClick={this.handleClick}>click me</button>

            </div>
        );
    }
}


export default MyComponent;