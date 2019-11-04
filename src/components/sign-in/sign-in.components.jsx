import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(){
        super()

        this.state ={
            email : '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password:'' });
        } catch (error) {
            console.log(error);
        }

    }

    handleChange = event => {
        const {name, value } = event.target;

        this.setState({ [name] : value})
    }


    render(){
        return(
            <section className='sign-in'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 offset-md-2'>
                        <h2 className='py-4 text-center'>Login Page</h2>
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <FormInput
                                        name="email"
                                        type="email"
                                        onChange={this.handleChange}
                                        value={this.state.email}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Password</label>
                                    <FormInput
                                        name="password"
                                        type="password"
                                        onChange={this.handleChange}
                                        value={this.state.password}
                                    />
                                </div>
                                <CustomButton type='submit' className='btn btn-primary'> Sign In </CustomButton>
                                <CustomButton onClick={signInWithGoogle} className='btn bg-dark text-white mx-2' isGoogleSignIn>
                                    {' '} Sign in with Google {' '}
                                </CustomButton>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SignIn;