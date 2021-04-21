import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: auto;
  border: solid rgb(212, 205, 205) 1px;
  border-radius: 4px;
  margin-top: 40px;
  padding: 0;
  box-shadow: 0 0 2px rgb(207, 203, 203);
  min-height: 220px;
`;

export const Header = styled.div`
  width: 100%;
  height: 30px;
  margin: 0;
  background-color: rgb(223, 223, 223);
  text-align: left;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
`;

export const ImageHolder = styled.div`
  height: 100%;
  width: 30%;
  margin: auto;
`;

export const Image = styled.img `
  height: auto;
  width: 80%;
  margin: auto;
`;

export const Name = styled.h3`
  margin: 0;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const FormContainer = styled.div`
  height: 80%;
  width: 70%;
  margin: 0;
  padding: 0;
  border-left: solid rgb(212, 205, 205) 1px;
`;

export const FormItem = styled.div`
  width: 90%;
  margin: auto;
  text-align: left;
  border-top: solid rgb(212, 205, 205) 1px;
`;

export const Input = styled.input`
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