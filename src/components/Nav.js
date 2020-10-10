import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Navbar, Alignment } from "@blueprintjs/core";
import { InputGroup } from "@blueprintjs/core";

class Nav extends React.Component {
    render() {
        return (
            <Navbar fixedToTop="true">
                <Navbar.Group align={Alignment.RIGHT}>
                    <Navbar.Heading>Northeast Food Blog</Navbar.Heading>
                    <Navbar.Divider />
                    <InputGroup id="search"
                        placeholder="Search"
                        type="search"
                    />
                    <Link to="/restaurants"><Button className="bp3-minimal" icon="shop" text="Restaurants" /></Link>
                    <Link to="/recipes"><Button className="bp3-minimal" icon="book" text="Recipes" /></Link>
                    <Link to="/add"><Button className="bp3-minimal" icon="plus" text="Add" /></Link>
                </Navbar.Group>
            </Navbar >
        );

    }
}

export default Nav;


