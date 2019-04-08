
import React from 'react'
import UserForm from '../components/UserForm'
import axios from 'axios'


class SignUpPage extends React.Component {

    onSubmit = event => {
        console.log("submit")
    }

    render() {
        return (
            <UserForm url={"http://localhost:4000/api/users"} onSubmit={this.onSubmit}>
                Sign In
            </UserForm>
        )
    }
}


export default SignUpPage;
