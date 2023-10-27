import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 1rem;

  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  padding: 2rem;

  transition: 0.3s;

  > svg {
    font-size: 20rem;
    margin-inline: auto
  }

  > h3 {
    font-size: 3rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6rem;

    font-size: 2rem;

    p {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;