import styled from "styled-components";

export const PersonItemContainer = styled.div`
  background-color: #636363;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`;


export const PersonItemContent = styled.div`
  margin-top: 2rem;
  margin-left: 15rem;
  margin-right: 15rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
  color: white;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  .item {
    text-align: center;

    span {
      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;
