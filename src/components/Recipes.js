import React, { useState, useEffect } from 'react';

export function Recipes() {

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
            <h1>Recipes</h1>
            {collectionList.map(item => (
                <div class="d-flex recipe-container">
                    <div class="img-container">
                        <img src={item.image}></img>
                    </div>
                    <div class="">
                        <h2>{item.title}</h2>


                        {item.link}
                        <ul>
                            {item.ingredients.map(ingredient => (
                                <li>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))
            }
        </div>
    );

}

export default Recipes;