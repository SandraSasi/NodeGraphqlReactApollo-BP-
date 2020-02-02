import * as React from "react";

import {
  Button,
  Classes,
  Code,
  Divider,
  Drawer,
  H5,
  HTMLSelect,
  IOptionProps,
  Label,
  Position,
  Switch,
  Menu,
  MenuItem,
  MenuDivider,
  Icon
} from "@blueprintjs/core";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Icon className="menu-icon" icon="layout-grid" onClick={handleClose} />
      <Drawer
        className="drawer-component"
        title="MENU"
        isOpen={isOpen}
        onClose={handleClose}
        autoFocus={true}
        canEscapeKeyClose={false}
        canOutsideClickClose={false}
        hasBackdrop={false}
        position={Position.LEFT}
      >
        <div className={Classes.DRAWER_BODY}>
          {/* <div className={Classes.DIALOG_BODY}> */}
          <Menu>
            <MenuItem icon={"info-sign"} text="emploeur" />
            <MenuDivider />
            <MenuItem icon="new-text-box" text="Flat" />
            <MenuItem icon="new-object" text="Employee" />
            <MenuItem icon="new-link" text="Services" />
            <MenuItem icon="new-link" text="Add Place" />

            <MenuDivider />
            <MenuItem icon="cog" text="Logout" />
          </Menu>
        </div>
        {/* </div> */}
      </Drawer>
    </div>
  );
};

export default Sidebar;
