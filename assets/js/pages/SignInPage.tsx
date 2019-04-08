
import React from 'react'
import UserForm from '../components/UserForm'
import axios from 'axios'
import { loginUser } from "../_actions"

const SIGN_IN_URL = "http://localhost:4000/api/sessions"
const SIGN_UP_URL = "http://localhost:4000/api/users"


class SignInPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = ({
            email: '',
            password: '',
            isLogin: true
        })
    }

    onSubmit = event => {
        const { isLogin, email, password } = this.state;

        const URL = isLogin ? SIGN_IN_URL : SIGN_UP_URL


        event.preventDefault()
    }


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    swapFormType = event => {
        const { isLogin } = this.state
        this.setState({
            isLogin: !isLogin
        })

        event.preventDefault()
    }

    render() {
        const { isLogin } = this.state;
        return (
            <div>
                <UserForm onSubmit={this.onSubmit} onInputChange={this.handleChange} swapFormType={this.swapFormType}>
                    {isLogin ? "Sign In" : "Sign Up"}
                </UserForm>
            </div>
        )
    }
}


export default SignInPage;
