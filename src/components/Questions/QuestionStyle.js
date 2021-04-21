import { Link } from "react-router-dom";
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 400px;
  margin: auto;
  border: solid rgb(212, 205, 205) 1px;
  border-radius: 4px;
  margin-top: 40px;
  padding: 0;
  box-shadow: 0 0 2px rgb(207, 203, 203);
  height: 180px;
`;


export const Header = styled.div`
  width: 100%;
  height: 30px;
  margin: 0;
  background-color: rgb(223, 223, 223);
  text-align: left;
`;

export const Body = styled.body`
  width: 100%;
  display: flex;
  padding: 10px;
`;

export const ImageContainer = styled.div`
  height: 60%;
  width: 30%;
  margin: auto;
`;


export const Image = styled.img`
  height: 90%;
  width: 80%;
  margin: auto;
`;

export const Info = styled.div`
  height: 100%;
  width: 70%;
  margin: 0;
  padding: 0;
  border-left: solid rgb(212, 205, 205) 1px;
`;

export const Button = styled.button`
  display: block;
  margin: auto;
  color: white;
  background-color: tomato;
  width: 70%;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  border: none;
  cursor: pointer;
`;

export const Linked = styled(Link)`
  text-decoration: none;
`;

export const HeaderThree = styled.h3`
  margin: 0;
  margin-left: 10px;
`;

export const HeaderFour = styled.h3`
  margin: 0;
  margin-left: 10px;
`;