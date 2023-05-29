
import React from "react";
import AddUserinfor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Kim Jennie", age: "26" },
            { id: 2, name: "Dew Bui", age: "13" },
            { id: 3, name: "trong Dai", age: "22" }
        ]
    }
    handleAddNewUser = (object) => {
        console.log(object);
        let liseUserNew = this.state.listUser;
        liseUserNew.unshift(object);
        this.setState({
            listUser: liseUserNew
        })
        // this.setState({
        //     listUser: [object, ...this.state.listUser]

        // })
    }
    handleDeleteUser = (userId) => {
        let liseUserClon = this.state.listUser;
        liseUserClon = liseUserClon.filter(item => item.id !== userId);
        this.setState({
            listUser: liseUserClon
        })

    }
    render() {

        //DRY; don't repeat yuoseft

        return (
            <>
                <div>
                    <AddUserinfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br /><br />
                    <DisplayInfor
                        listUser={this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
            </>
        );
    }
}


export default MyComponent;