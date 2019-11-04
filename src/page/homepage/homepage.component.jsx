import React from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../../components/custom-button/custom-button.component';

import './homepage.styles.scss';

const Homepage = () => (
    
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className='homepage'>
                        <div className='buttons'>
                            <Link to="/signin">
                                <CustomButton 
                                    className="btn btn-lg btn-primary"
                                >
                                    Sign In
                                </CustomButton>
                            </Link>
                            <Link to='/signup'>
                                <CustomButton 
                                    className="btn btn-lg btn-primary"
                                >
                                    Sign Up
                                </CustomButton>
                            </Link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    
)

export default Homepage;