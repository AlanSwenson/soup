import React, { useState, useEffect } from 'react';
import { Button, InputGroup, FormGroup, TagInput} from "@blueprintjs/core";
import './App.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';

function App() {
const [flaskMessage, setFlaskMessage] = useState("no message set");
const [ingredients, setIngredients] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
	console.log( e.target.title.value );
	console.log( e.target.link.value );
	console.log( ingredients );
		const data = {
			"title": e.target.title.value,
			"link": e.target.link.value,
			"ingredients": ingredients
		}
		fetch('/api', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {'Content-Type': 'application/json' },
			})
	}
	  useEffect(() => {
    fetch('/message').then(
      res => res.json().then(data => {
        setFlaskMessage(data.flask_message);
      }))
  }, []);

  return (
	  
    <div className="App">
      <header className="App-header">
        	  <h1>{flaskMessage}</h1>
	<form onSubmit={handleSubmit}>
	  <FormGroup
	  label="Title"

	  labelFor="title"
	  inline="true"
>
    <InputGroup id="title" placeholder="Recipe Title" />
	  </FormGroup>

<FormGroup
    label="Link"
    labelFor="link"
	  inline="true"
>
    <InputGroup id="link" placeholder="Recipe Link" />
	  </FormGroup>

	  <FormGroup
	  label="Ingredients"	  
	  labelFor="ingredients"
	  inline="true"
	  >

	  <TagInput
    onChange={ (values: string[]) => setIngredients( values )}
	  onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault(); }}
	  values={ingredients}
	  id="ingredients"
    	placeholder='Ingredients'
/>
</FormGroup>

	  <Button intent="success" text="Add" type="submit"/>
      
</form>

	  </header>
    </div>
  );
}

export default App;
