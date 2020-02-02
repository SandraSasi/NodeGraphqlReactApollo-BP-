import React from "react";

const Select = () => (
  <h1>this</h1>
  //   <PermissionSelect
  //     items={props.allPermissions}
  //     onItemSelect={item => {
  //       props.dispatch({ type: "permission_selected", payload: item });
  //     }}
  //     itemRenderer={(x: Permission, { modifiers, handleClick }) => {
  //       if (!modifiers.matchesPredicate) {
  //         return null;
  //       }
  //       return (
  //         <MenuItem
  //           active={modifiers.active}
  //           icon="snowflake"
  //           key={x.id}
  //           onClick={handleClick}
  //           text={x.permissionName}
  //           shouldDismissPopover={false}
  //         />
  //       );
  //     }}
  //   >
  //
  //     <Button
  //       text={
  //         props.selectedPermission
  //           ? props.selectedPermission.permissionName
  //           : "Select Permission"
  //       }
  //       rightIcon="double-caret-vertical"
  //     />
  //
  //   </PermissionSelect>
);

export default Select;
