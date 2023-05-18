
import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Jennie',
        address: 'Kim',
        age: 26
    };

    handleClick = () => {
        console.log("call me", this.state.name);

        this.setState({
            name: 'kim jennie'
        })
    }
    handleOnMoverOver(event) {
        console.log(event.pageX);
    }

    render() {
        return (
            <div>My first MyComponent<button onMouseOver={this.handleOnMoverOver}>Call me</button>
                {this.state.name} And {this.state.address} And {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}>click me</button>

            </div>
        );
    }
}


export default MyComponent;