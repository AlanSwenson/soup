import React, { useState, useEffect } from 'react';
import { Button, InputGroup, FormGroup, TagInput, Navbar, Alignment } from "@blueprintjs/core";
import './App.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';

function App() {
const [flaskMessage, setFlaskMessage] = useState("no message set");
const [title, setTitle] = useState("");
const [link, setLink] = useState("");
const [ingredients, setIngredients] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
	console.log( title);
	console.log( link);
	console.log( ingredients );
		const data = {
			"title": title,
			"link": link,
			"ingredients": ingredients
		}
		fetch('/api', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {'Content-Type': 'application/json' },
		}).then( data =>
			{
				setIngredients([]);
				setLink("");
				setTitle("");
			}
		)
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
<Navbar fixedToTop="true" className="bp3-dark">
    <Navbar.Group align={Alignment.RIGHT}>
        <Navbar.Heading>Recipes</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="search" text="Seach" />
        <Button className="bp3-minimal" icon="plus" text="Add" />
    </Navbar.Group>
</Navbar>



        	  <h1>{flaskMessage}</h1>
	<form onSubmit={handleSubmit}>
	  <FormGroup
	  label="Title"

	  labelFor="title"
	  inline="true"
>
    <InputGroup id="title" 
	  	placeholder="Recipe Title"
		onChange={e => setTitle(e.target.value )}
	  	value={ title }
	  />
	  </FormGroup>

<FormGroup
    label="Link"
    labelFor="link"
	  inline="true"
>
    <InputGroup id="link" 
	  	placeholder="Recipe Link" 
		onChange={e => setLink(e.target.value )}
	  	value={ link }
	  />
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
