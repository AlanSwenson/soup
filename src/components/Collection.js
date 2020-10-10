import React, { useState, useEffect } from 'react';
import { Button, InputGroup, FormGroup, TagInput } from "@blueprintjs/core";

export function CollectionList() {

    const [collectionList, setCollectionList] = useState([]);

    useEffect(() => {
        fetch('/list_recipes', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(res => res.collection)
            .then(res => {
                console.log(res)
                setCollectionList(res)
            });
    }, []);

    return (
        <div class="collection-container">
            <h1>Recipe Collection</h1>
            {collectionList.map(item => (
                <p>{item.title} - {item.link}
                    <ul>
                        {item.ingredients.map(ingredient => (
                            <li>{ingredient}</li>
                        ))}
                    </ul>
                </p>
            ))
            }
        </div>
    );

}

export default CollectionList;