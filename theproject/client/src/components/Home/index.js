import React from 'react';
import "./style.css";
import Nav from "../Nav";
import {Col, Container, Row} from "../Grid";
import {Link} from 'react-router-dom';

const Home = (props) =>{
	return (
		

		<Container>
		<Nav />

		<Row>
		<Col size="col-12">
		<div className="container home">
		<div className="col-4 center-block" id="signIn">
		{/* <div className="home" > */}
			<h1>You should only see this if you are logged in!</h1>
			<p>{props.auth.username}</p>
			<button  id="logout" onClick = {props.handleLogout}>Log Out</button>
			<Link to = "/Main" >
			<button  id="started" type="button">Lets get Started</button>
	 		</Link>
			</div>
			</div>
			{/* </div> */}
			</Col>
			</Row>
		
		</Container>
	);
};

export default Home;