import React, { useState } from 'react';
import { Button, InputGroup, FormGroup, TagInput, FileInput } from "@blueprintjs/core";

export function Add() {

    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(link);
        console.log(ingredients);
        console.log(selectedFile);
        const data = {
            "title": title,
            "link": link,
            "ingredients": ingredients,
            "file": selectedFile
        }
        const formData = new FormData();

        for (const name in data) {
            formData.append(name, data[name]);
        }
        fetch('/create_recipe', {
            method: 'POST',
            body: formData,
        }).then(data => {
            setIngredients([]);
            setLink("");
            setTitle("");
        }
        );
    }





    return (
        <div class="add-container">
            <h1>Add Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div class="wrapper">

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
                    <FileInput text="Choose file..." value={selectedFile} onInputChange={(e) => setSelectedFile(e.target.files[0])} />

                    <Button intent="success" text="Add" type="submit" />
                </div>
            </form>
        </div>
    );

}

export default Add;