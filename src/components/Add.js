import React, { useState } from 'react';
import { Button, InputGroup, FormGroup, TagInput } from "@blueprintjs/core";

export function Add() {

    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(link);
        console.log(ingredients);
        const data = {
            "title": title,
            "link": link,
            "ingredients": ingredients
        }
        fetch('/api', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        }).then(data => {
            setIngredients([]);
            setLink("");
            setTitle("");
        }
        );
    }





    return (
        <div>
            <h1>Add Recipe</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup
                    label="Title"

                    labelFor="title"
                    inline="true"
                >
                    <InputGroup id="title"
                        placeholder="Recipe Title"
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                    />
                </FormGroup>

                <FormGroup
                    label="Link"
                    labelFor="link"
                    inline="true"
                >
                    <InputGroup id="link"
                        placeholder="Recipe Link"
                        onChange={e => setLink(e.target.value)}
                        value={link}
                    />
                </FormGroup>

                <FormGroup
                    label="Ingredients"
                    labelFor="ingredients"
                    inline="true"
                >

                    <TagInput
                        onChange={(values: string[]) => setIngredients(values)}
                        onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        values={ingredients}
                        id="ingredients"
                        placeholder='Ingredients'
                    />
                </FormGroup>

                <Button intent="success" text="Add" type="submit" />

            </form>
        </div>
    );

}

export default Add;