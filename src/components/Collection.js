import React, { useState } from 'react';
import { Button, InputGroup, FormGroup, TagInput } from "@blueprintjs/core";

export function CollectionList() {

    fetch('/list_recipes', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then(data => {
        console.log(data)
    }
    );

    return (
        <div class="collection-container">
            <h1>Recipe Collection</h1>


        </div>
    );

}

export default CollectionList;