import styled from "styled-components";

const colors = {
  background: "#0d1117",
  textPrimary: "#c9d1d9",
};

export const PageTitle = styled.h1`
  color: ${colors.textPrimary};
  text-align: center;
  margin: 30px 0;
  font-size: 2.5rem;
  font-weight: 700;
  width: 100%;
`;

export const CardWolrd = styled.div`
  background-color: ${colors.background};
  min-height: 100vh;
  padding: 40px 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  gap: 30px;
`;
