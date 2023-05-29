import React from "react";
import './DisplayInfor.scss';
import logo1 from "./../logo.svg"

class DisplayInfor extends React.Component {
    constructor(props) {
        console.log("props");
        super(props)
        this.state = {
            islistusre: false
        }
    }

    componentDidMount() {
        console.log('checkk>>>>>>>');
        setTimeout(() => {
            document.title = 'Jennie Kim'
        }, 3000)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('checkk>>>>>>>1', this.props, prevProps);
        if (this.props.listUser.length === 5) {
            alert('mee')
        }
    }
    handleShowHide = () => {
        this.setState({
            islistusre: !this.state.islistusre
        })
    }
    render() {
        console.log('Checkk>>> reder 111111');

        // destructuring array / object
        const { listUser } = this.props; //object 
        // const listUser = this.props.liseUser
        //props => viết tắt properties
        // console.table(listUser);
        return (
            <React.Fragment>
                <div className="display-infor-container">
                    <img src={logo1} />
                    <div>
                        <span onClick={() => { this.handleShowHide() }}>

                            {this.state.islistusre === true ? "Hide list user:" : "Show list user:"}
                        </span>
                    </div>
                    {this.state.islistusre &&
                        <>
                            {
                                listUser.map((user) => {
                                    return (
                                        <div>
                                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                                <div>My name is :{user.name}</div>
                                                <div>My age is:{user.age}</div>
                                                <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                    }
                </div>
            </React.Fragment>
        )
    }
}
export default DisplayInfor;