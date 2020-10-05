import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import './App.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import Add from './components/Add.js';
import Nav from './components/Nav.js';

function App() {


	return (

		<div className="App">
			<header className="App-header">
				<Nav />

				<Add />

			</header>
		</div>
	);
}

export default App;
