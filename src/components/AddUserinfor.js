import React from "react";

class AddUserinfor extends React.Component {
    state = {
        name: 'Jennie',
        address: 'Kim',
        age: 26
    };
    handleonChangeInput = (event) => {

        this.setState({
            name: event.target.value
        })
    }
    handleonChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handlOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1),
            name: this.state.name,
            age: this.state.age
        })
    }
    render() {
        return (
            <div>
                My first MyComponent
                {this.state.name} And {this.state.address} {this.state.age}
                <form onSubmit={(event) => { this.handlOnSubmit(event) }}>
                    <input type="text"
                        value={this.state.name}
                        onChange={(event) => { this.handleonChangeInput(event) }}
                    />
                    <input type="text"
                        value={this.state.age}
                        onChange={(event) => { this.handleonChangeAge(event) }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddUserinfor;