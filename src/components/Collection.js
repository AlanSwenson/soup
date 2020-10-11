import React, { useState, useEffect } from 'react';

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
                <div>{item.title} - {item.link}
                    <ul>
                        {item.ingredients.map(ingredient => (
                            <li>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            ))
            }
        </div>
    );

}

export default CollectionList;