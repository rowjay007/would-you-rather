import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavItem = styled.li`
  margin-left: 10px;
  border-left: solid 1px rgb(136, 136, 136);
  padding: 6px 0 0 6px;
  font-weight: bold;
`;

export const Item = styled(NavLink)`
  color: rgb(95, 91, 91);

  &:hover {
    color: #006994;
  }

  &:active {
    color: #006994;
  }
`;
