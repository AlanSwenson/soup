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
			<header className="App-header">
				<Router>
					<Nav />
					<Switch>
						<Route path="/" exact />
						<Route path="/add" component={Add} />
						<Route path="/collection" component={CollectionList} />
					</Switch>
				</Router>

			</header>
		</div>
	);
}

export default App;
