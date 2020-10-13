import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import './App.scss';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import Add from './components/Add.js';
import AddRecipe from './components/AddRecipe.js';
import AddRestaurant from './components/AddRestaurant.js';
import Nav from './components/Nav.js';
import Recipes from './components/Recipes.js';
import Restaurants from './components/Restaurants.js';

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
						<Route path="/add" exact component={Add} />
						<Route path="/add-recipe" component={AddRecipe} />
						<Route path="/add-restaurant" component={AddRestaurant} />
						<Route path="/recipes" component={Recipes} />
						<Route path="/restaurants" component={Restaurants} />
					</Switch>
				</section>
			</Router>
		</div>
	);
}

export default App;
