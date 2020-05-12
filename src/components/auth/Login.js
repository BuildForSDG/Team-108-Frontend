import React from 'react';

import brandImg from '../../assets/brandImg.png'
import './Login.css';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);

        this.setState({username: '', password: ''});
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className={'login'}>
                <section>
                    <div>
                        <img src={brandImg} alt={'brand image'} />
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <hgroup>
                            <h3>Welcome to MCare</h3>
                            <h4>Please log in</h4>
                        </hgroup>
                        <div className={'input-wrap'}>
                            {/* TODO: fontawesome email icon */}
                            <input type="text" name={"username"} value={this.state.username} placeholder="Email or Username" onChange={this.handleChange} />
                        </div>
                        <div className={'input-wrap'}>
                            {/* TODO: fontawesome lock icon */}
                            <input type="password" name={'password'} value={this.state.password} placeholder="Password" onChange={this.handleChange} />
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