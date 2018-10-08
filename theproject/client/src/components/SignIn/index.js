import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import {Col, Container, Row} from "../Grid";



const SignIn = (props)=> {
	return (
		<Container>
			
			<Row>
				{/* <div className="col-4"></div> */}
				<Col size="col-12">
				
		<div id="signIn">
			<h1>SIGN IN</h1>
			<Link to = "/signup" >Go to sign up</Link>
			<form>
				<label>Email</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button  id="btnSign" type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
			</form>
		</div>
		</Col>
		</Row>
		</Container>
	);
};

export default SignIn;