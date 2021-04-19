import styled from "styled-components";

export const Main = styled.div`
  margin-bottom: 150px;
`;

export const Container = styled.div`
  display: flex;
  max-width: 400px;
  margin: auto;
  border: solid rgb(212, 205, 205) 1px;
  border-radius: 4px;
  margin-top: 40px;
  padding: 10px;
  box-shadow: 0 0 2px rgb(207, 203, 203);
  height: 150px;
`;

export const imgContainer = styled.div`
  height: 100%;
  width: 30%;
`;

export const Image = styled.img`
  height: auto;
  width: 80%;
  margin: auto;
  margin-top: 15px;
`;

export const Info = styled.div`
  height: 100%;
  width: 55%;
  margin: 0;
  padding: 0;
  border-left: solid rgb(212, 205, 205) 1px;
  border-right: solid rgb(212, 205, 205) 1px;
`;


export const Name = styled.h3`
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ScoreCard = styled.p`
  margin: auto;
  margin-top: 10px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  border-top: solid rgb(212, 205, 205) 1px;
`;

export const Score = styled.div`
  width: 15%;
  height: 100%;
`;


export const OceanBlue = styled.div`
  color: #006994;
  font-size: 1.3rem;
`;