import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  min-height: 80px;
  border-bottom: solid 2px #006994;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 1.2rem;
`;

export const NavigationItems = styled.ul`
  margin: 0;
  padding: 5px;
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  border-radius: 8px 8px 0 0;
  background: rgb(223, 223, 223);

  @media screen and (min-width: 450px) {
    .NavigationItems {
        flex-direction: row;
    }
`;
/* // export const NavItem = styled(NavItem)`
//   height: 100 %;
// `; */

export const userOptions = styled.div`
  height: 40px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 0.9rem;
`;

export const Button = styled.button`
  border: none;
  color: white;
  background: #006994;
  padding: 5px 5px;
  height: 35px;
  align-self: flex-end;
  cursor: pointer;
`;
