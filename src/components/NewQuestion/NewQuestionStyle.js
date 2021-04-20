import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: auto;
  border: solid rgb(212, 205, 205) 1px;
  border-radius: 4px;
  margin-top: 40px;
  padding: 10px;
  box-shadow: 0 0 2px rgb(207, 203, 203);
  box-sizing: border-box;
`;

export const HeaderH2 = styled.h2`
  font-style: oblique;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 30px;
  color: tomato;
  font-size: 1.3rem;
`;

export const FormInput = styled.div`
  height: 50px;
  margin-top: 10px;
`;

export const Input = styled.input`
  display: block;
  margin: auto;
  padding-left: 5px;
  width: 100%;
  min-height: 30px;
  margin-top: 0;
  border: solid 1px rgb(95, 91, 91);
`;

export const Green = styled.p`
  color: #17b978;
  text-align: right;
`;

export const Button = styled.button`
  display: block;
  margin: auto;
  color: white;
  background-color: #006994;
  width: 70%;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 30px;
  border: none;
  cursor: pointer;
`;
