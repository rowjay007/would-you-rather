import React from "react";
import { NavItem } from "./NavItemStyles";
import { Item } from "./NavItemStyles";

const navigationItem = ({ to, exact, children }) => (
  <NavItem>
    <Item to={to} exact={exact}>
      {children}
    </Item>
  </NavItem>
);

export default navigationItem;
