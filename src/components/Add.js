import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from "@blueprintjs/core";

export function Add() {


    return (
        <div class="collection-container">
            <h1>Add Review:</h1>
            <Link to="/add-restaurant"><Button className="bp3-minimal" icon="plus" text="Restaurant" /></Link>
            <Link to="/add-recipe"><Button className="bp3-minimal" icon="plus" text="Recipe" /></Link>
        </div>
    );

}

export default Add;