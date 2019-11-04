import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if( password !== confirmPassword ){
            alert(" passwords don't match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email, 
                password
            );

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value});
    }


    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 offset-md-2'>
                            <h3>Sign Up Here</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <label>Name</label>
                                    <FormInput
                                        name="displayName"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={displayName}
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <FormInput
                                        name="email"
                                        type="email"
                                        onChange={this.handleChange}
                                        value={email}
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Password</label>
                                    <FormInput
                                        name="password"
                                        type="password"
                                        onChange={this.handleChange}
                                        value={password}
                                        required
                                    />
                                </div>
                                <div className='form-group'>
                                    <label>Confirm Password</label>
                                    <FormInput
                                        name="confirmPassword"
                                        type="password"
                                        onChange={this.handleChange}
                                        value={confirmPassword}
                                        required
                                    />
                                </div>
                                <CustomButton className="btn btn-primary" type='submit'>Sign Up</CustomButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;