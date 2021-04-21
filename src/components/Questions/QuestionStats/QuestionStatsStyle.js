import styled from "styled-components";
import Option from "./Option";

export const Container = styled.div`
  max-width: 400px;
  margin: auto;
  border: solid rgb(212, 205, 205) 1px;
  border-radius: 4px;
  margin-top: 40px;
  margin-bottom: 100px;
  padding: 10px;
  box-shadow: 0 0 2px rgb(207, 203, 203);
  box-sizing: border-box;
`;

export const Image = styled.img`
  height: 50px;
  width: 50px;
  margin: auto;
`;

export const Progress = styled(Option)`
  border: solid rgb(212, 205, 205) 1px;
  border-radius: 4px;
  min-height: 110px;
  margin-top: 10px;
`;
export const ProgressBar = styled.div`
  border: solid rgb(212, 205, 205) 1px;
  border-radius: 4px;
  min-height: 110px;
  margin-top: 10px;
`;



export const Text = styled.p`
  .text {
    margin: 10px 0;
  }
`;