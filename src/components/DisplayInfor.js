import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';


//stateless vs setateful
// class DisplayInfor extends React.Component {
//     render() {

//         // destructuring array / object
//         const { listUser } = this.props; //object 
//         // const listUser = this.props.liseUser
//         //props => viết tắt properties
//         // console.table(listUser);
//         return (
//             <React.Fragment>
//                 <div className="display-infor-container">
//                     <img src={logo1} />
//                     {true &&
//                         <>
//                             {
//                                 listUser.map((user) => {
//                                     return (
//                                         <div>
//                                             <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                                 <div>My name is :{user.name}</div>
//                                                 <div>My age is:{user.age}</div>
//                                                 <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                             </div>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </>
//                     }
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUser } = props; //object 
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }


    useEffect(() => {
        console.log("useEffect");
        setTimeout(() => {
            document.title = 'Jennie'
        }, 2000)
        if (listUser.length === 5) {
            alert('5 user')
        }
    }, [listUser])
    return (

        <>
            <div className="display-infor-container">
                <div>
                    <span onClick={() => handleShowHideListUser()}>
                        {isShowHideListUser === true ? "Hide list user" : "Show list user"}</span>
                </div>
                {isShowHideListUser &&
                    <>
                        {
                            listUser.map((user, index) => {
                                return (
                                    <div>
                                        <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                            <div>My name is :{user.name}</div>
                                            <div>My age is:{user.age}</div>
                                            <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
                }
            </div>
            <div>haidas</div>
        </>
    )
}
export default DisplayInfor;