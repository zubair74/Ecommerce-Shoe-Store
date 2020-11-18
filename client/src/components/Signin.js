import React from 'react'
import "../main.css";
import heroimg from '../img/img-01.png'
import { Link } from "react-router-dom";


function Signin({loginInfo}) {
	const something = (event) => {
		if (event.keyCode === 13) {
		  loginInfo({ email: document.getElementById('username').value, password: document.getElementById('password').value })
		}
	  }
    return (
        <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src= {heroimg} alt="IMG"/>
				</div>

				<div class="login100-form validate-form">
					<span class="login100-form-title">
						Login
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class= 'input100' type="text" name="email" placeholder="Email" id='username'/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="pass" placeholder="Password" id='password'/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" onClick={() => loginInfo({ email: document.getElementById('username').value, password: document.getElementById('password').value })}>
							Login
						</button>
					</div>

					

					<div class="text-center p-t-136">
					<Link to="/signup" >
                   
							Create your Account
                 </Link>
						
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default Signin
