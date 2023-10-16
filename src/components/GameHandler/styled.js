import styled from "@emotion/styled";

export const Container = styled.div`
  all: unset;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const SectionContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
