import * as React from "react";

import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch
} from "@blueprintjs/core";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar className="navbar-custom bp3-dark">
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Emploeur</NavbarHeading>
        </NavbarGroup>

        <NavbarGroup align={Alignment.RIGHT}>
          <Button className={Classes.MINIMAL} icon="home" text="Home" />
          <Button className={Classes.MINIMAL} icon="document" text="Files" />
        </NavbarGroup>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
