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
import CollectionList from './components/Collection.js';

function App() {


	return (

		<div className="App">
			<Router>
				<header className="App-header">
					<Nav />
				</header>
				<section className="App-body">
					<Switch>
						<Route path="/" exact />
						<Route path="/add" component={Add} />
						<Route path="/recipes" component={CollectionList} />
					</Switch>
				</section>
			</Router>
		</div>
	);
}

export default App;
