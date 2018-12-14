import React, { Component } from 'react'
import Signup from './Signup';

class AuthComponent extends Component {
    state = {
        user: {}
    }

    handleSignup = (e) => {
        e.preventDefault()
        console.log('Signup');

    }
    handleInput = (e) => {
        const { user } = this.state
        user[e.target.name] = e.target.value
        this.setState({ user })
    }

    render() {
        const { pathname } = this.props.location
        const { handleInput, handleSignup } = this
        console.log(this.state.user)
        return (
            <div>
                {pathname === '/login' ?
                    <p>Login</p> :
                    <Signup handleInput={handleInput} handleSignup={handleSignup} />
                }
            </div>
        )
    }
}

export default AuthComponent