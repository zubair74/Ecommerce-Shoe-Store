import React from "react";
import "../main.css";
import heroimg from '../img/img-01.png'
import { Link } from "react-router-dom";

function Signup({SignupInfo, signupstatus}) {
    console.log(signupstatus);
    const something = (event) => {
        if (event.keyCode === 13) {
            SignupInfo({ name: document.getElementById('name').value, email: document.getElementById('username').value, password: document.getElementById('password').value })
        }
    }


    if (signupstatus !== 'null') {
        return (

            <div class="limiter">
                <div class="container-login100">
                    <div class="alert alert-secondary my-alert" role="alert">
                        Your Account has been created successfully! <Link to="/login" >
                            Login Now
              </Link>
                    </div>

                    <div class="wrap-login100">
                        <div class="login100-pic js-tilt" data-tilt>
                            <img src={heroimg} alt="IMG" />
                        </div>

                        <div class="login100-form validate-form">
                            <span class="login100-form-title">
                                Signup
                        </span>


                            <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input class="input100" type="text" id="name" name="email" placeholder="Name" />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>



                            <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input class="input100" type="text" name="email" placeholder="Email" id='username' />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate="Password is required">
                                <input class="input100" type="password" name="pass" placeholder="Password" id='password' onKeyDown={(e) => something(e)} />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="container-login100-form-btn">
                                <button class="login100-form-btn" onClick={() => SignupInfo({ name: document.getElementById('name').value, email: document.getElementById('username').value, password: document.getElementById('password').value })}>
                                    Sign Up
                            </button>
                            </div>



                            <div class="text-center p-t-136">
                                <b>
                                    <Link to="/login" >


                                        Sign In
                     </Link></b>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    else {
        return (
            <div class="limiter">
                <div class="container-login100">



                    <div class="wrap-login100">
                        <div class="login100-pic js-tilt" data-tilt>
                            <img src={heroimg} alt="IMG" />
                        </div>

                        <div class="login100-form validate-form">
                            <span class="login100-form-title">
                                Signup
                        </span>


                            <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input class="input100" type="text" id="name" name="email" placeholder="Name" />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>



                            <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input class="input100" type="text" name="email" placeholder="Email" id='username' />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate="Password is required">
                                <input class="input100" type="password" name="pass" placeholder="Password" id='password' onKeyDown={(e) => something(e)} />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="container-login100-form-btn">
                                <button class="login100-form-btn" onClick={() => SignupInfo({ name: document.getElementById('name').value, email: document.getElementById('username').value, password: document.getElementById('password').value })}>
                                    Sign Up
                            </button>
                            </div>



                            <div class="text-center p-t-136">
                                <b>
                                    <Link to="/login" >


                                        Sign In
                     </Link></b>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup
