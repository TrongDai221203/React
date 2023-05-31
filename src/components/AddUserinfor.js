import React, { useState } from "react";

// class AddUserinfor extends React.Component {
//     state = {
//         name: 'Jennie',
//         address: 'Kim',
//         age: 26
//     };
//     handleonChangeInput = (event) => {

//         this.setState({
//             name: event.target.value
//         })
//     }
//     handleonChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }
//     handlOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1),
//             name: this.state.name,
//             age: this.state.age
//         })
//     }
//     render() {
//         return (
//             <div>
//                 My first MyComponent
//                 {this.state.name} And {this.state.address} {this.state.age}
//                 <form onSubmit={(event) => { this.handlOnSubmit(event) }}>
//                     <input type="text"
//                         value={this.state.name}
//                         onChange={(event) => { this.handleonChangeInput(event) }}
//                     />
//                     <input type="text"
//                         value={this.state.age}
//                         onChange={(event) => { this.handleonChangeAge(event) }}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }


const AddUserinfor = (props) => {

    // const [name, setname] = useState("Jennie");
    // const [address, setaddress] = useState("Kim");
    // const [age, setage] = useState("27");
    const [listUser, setlistUser] = useState({
        name: 'Jennie Kim',
        address: 'J E N N I E',
        age: 26
    })
    const handleonChangeInput = (event) => {

        setlistUser({
            name: event.target.value
        })
    }
    const handleonChangeAge = (event) => {
        setlistUser({
            age: event.target.value
        })
    }
    const handlOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1),
            name: listUser.name,
            age: listUser.age
        })
    }
    return (
        <div>
            My first MyComponent
            {listUser.name} And {listUser.address} {listUser.age}
            <form onSubmit={(event) => { handlOnSubmit(event) }}>
                <input type="text"
                    value={listUser.name}
                    onChange={(event) => { handleonChangeInput(event) }}
                />
                <input type="text"
                    value={listUser.age}
                    onChange={(event) => { handleonChangeAge(event) }}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddUserinfor;