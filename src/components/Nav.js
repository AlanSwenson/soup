import React from 'react'
import { Button, Navbar, Alignment } from "@blueprintjs/core";

class Nav extends React.Component {
    render() {
        return (
            <Navbar fixedToTop="true" className="bp3-dark">
                <Navbar.Group align={Alignment.RIGHT}>
                    <Navbar.Heading>Recipes</Navbar.Heading>
                    <Navbar.Divider />
                    <Button className="bp3-minimal" icon="search" text="Seach" />
                    <Button className="bp3-minimal" icon="book" text="Collection" />
                    <Button className="bp3-minimal" icon="plus" text="Add" />
                </Navbar.Group>
            </Navbar>
        );

    }
}

export default Nav;


