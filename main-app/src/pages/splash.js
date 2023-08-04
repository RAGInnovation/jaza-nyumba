// import { login, signup } from "./account";
import React, { useEffect, useState } from "react";
import "../App.css";
import Login from "../components/Login";
import Register from "../components/Register";

function Splash() {
	const add = (x, y): String => {
		return x + y;
	};

	const [isRegister, setIsRegister] = useState(true);
	const [text, setText] = useState({});

	const handleclick = () => {
		setIsRegister(!isRegister);
	};

	const getContent = async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
		const repsonseJson = await res.json();
		console.log(repsonseJson);
		setText(repsonseJson);
	};

	useEffect(() => {
		getContent();
	}, []);

	return (
		<div>
			<h2>What is Jaza Nyumba!</h2>
			<p>Descrition...</p>
			<span>{add(1, 9)}</span>

			<br />

			<h2>Wow to play</h2>
			<p>Descreption...</p>
			<button onClick={() => handleclick()}>sign up</button>

			{JSON.stringify(text)}

			{isRegister ? <Login /> : <Register />}

			{/* <button className="button" onClick={login}>
				Login
			</button>
			<br />
			<br />
			<button className="button" onClick={signup}>
				Sign up
			</button> */}
		</div>
	);
}

export default Splash;
