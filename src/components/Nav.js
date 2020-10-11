import React, { useState } from 'react';
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom'
import { Button, Navbar, Alignment, Menu } from "@blueprintjs/core";
import { InputGroup } from "@blueprintjs/core";

export function Nav() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div>
            <div class="d-flex justify-flex-end">
                <Hamburger rounded toggled={isOpen} toggle={setOpen} />

            </div>
            { isOpen ?
                <div class="d-flex justify-flex-end d-none-md">
                    <Menu>
                        <Menu.Item icon="shop" text="Restaurants" />
                        <Menu.Item icon="book" text="Recipes" />
                        <Menu.Item icon="plus" text="Add" />
                    </Menu>

                </div> : (
                    null
                )}
            <Navbar fixedToTop="true">
                <Navbar.Group align={Alignment.RIGHT}>
                    <Navbar.Heading>Northeast Food Blog</Navbar.Heading>
                    <Navbar.Divider />
                    <InputGroup id="search"
                        placeholder="Search"
                        type="search"
                        leftIcon="search"
                    />
                    <Link to="/restaurants"><Button className="bp3-minimal" icon="shop" text="Restaurants" /></Link>
                    <Link to="/recipes"><Button className="bp3-minimal" icon="book" text="Recipes" /></Link>
                    <Link to="/add"><Button className="bp3-minimal" icon="plus" text="Add" /></Link>
                </Navbar.Group>
            </Navbar >
        </div >
    );

}


export default Nav;


