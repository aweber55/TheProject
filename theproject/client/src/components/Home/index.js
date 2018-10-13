import React from 'react';
import "./homestyle.css";
import Jumbotron from "../Jumbotron/";
import {Col, Container, Row} from "../Grid";
import {Link} from 'react-router-dom';

const Home = (props) =>{
	return (
		
<div className="Home">
		<Container>
		{/* <Nav /> */}
		<Jumbotron />
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
		</div>
	);
};

export default Home;