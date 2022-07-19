// const UserObject = {
//     firstName : 'Mike',
//     lastName : 'Law',
//     signup : function(){
//         console.log(this.firstName, ' signed up!')
//     }
// }

// class User {
//     constructor(name, email, password) {
//         this.name = name
//         this.email = email
//         this.password = password
//     }

//     signup() {
//         console.log(this.name, ' signed up!')
//     }
// }

// class AdminUser extends User{
//     constructor(name, email, password){
//         super(name,email,password)
//         this.admin = true
//     }
// }


// let user = new User('Mike', 'royislowtier@gmail.com','dontblink')
// user.signup()


/////////////////////////////////////////////

import React from "react";

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
        }
    }

    render(){
        return(
            <div>
                <h1>Heyyo Class</h1>
                <h2>Count is {this.state.count}</h2>
                <button onClick ={ ()=>{
                    this.setState({count:this.state.count+1})}}>
                    Click me
                </button>
            </div>
        )
    }
}

export default App;