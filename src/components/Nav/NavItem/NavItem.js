import React from "react";
import { NavItem } from "./NavItemStyles";
import { Item } from "./NavItemStyles";

const navigationItem = (props) => (
  <NavItem>
    <Item
      to={props.to}
      exact={props.exact}
    >
      {props.children}
    </Item>
  </NavItem>
);

export default navigationItem;
