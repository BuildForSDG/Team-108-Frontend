import React from 'react';
import './Login.css';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className={'login'}>
                <section>
                    <div></div>
                    <form>
                        <hgroup>
                            <h3>Welcome to MCare</h3>
                            <h4>Please log in</h4>
                        </hgroup>
                        <div className={'input-wrap'}>
                            {/* TODO: fontawesome email icon */}
                            <input type="text" placeholder="Email or Username" />
                        </div>
                        <div className={'input-wrap'}>
                            {/* TODO: fontawesome lock icon */}
                            <input type="password" placeholder="Password" />
                            {/* TODO: fontawesome eye icon */}
                        </div>

                        <button>LOGIN</button>
                        
                        <p className={'cta forgot-pass'}>
                            Forgot <span>Email/Username or Password ?</span>
                        </p>


                        <p className={'cta create-account'}>
                            Don't have an accont? <span>sign up for FREE</span>
                        </p>
                    </form>
                </section>
            </div>
        )
    }
}