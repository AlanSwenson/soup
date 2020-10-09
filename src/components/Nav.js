import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Navbar, Alignment } from "@blueprintjs/core";

class Nav extends React.Component {
    render() {
        return (
            <Navbar fixedToTop="true" className="bp3-dark">
                <Navbar.Group align={Alignment.RIGHT}>
                    <Navbar.Heading>Recipes</Navbar.Heading>
                    <Navbar.Divider />
                    <Link to="/search"><Button className="bp3-minimal" icon="search" text="Seach" /></Link>
                    <Link to="/collection"><Button className="bp3-minimal" icon="book" text="Collection" /></Link>
                    <Link to="/add"><Button className="bp3-minimal" icon="plus" text="Add" /></Link>
                </Navbar.Group>
            </Navbar >
        );

    }
}

export default Nav;


