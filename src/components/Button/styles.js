import styled from "styled-components";

export const Container = styled.button`
  border: none;
  padding: 1rem;

  background-color: ${({ theme }) => theme.COLORS.BLUE};
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  border-radius: 1rem;

  font-size: 2rem;

  &.new {
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  &.edit {
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  &.delete {
    background-color: ${({ theme }) => theme.COLORS.TOMATO};
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  &.new:hover {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_200};
    color: ${({ theme }) => theme.COLORS.BLUE};

    font-weight: bold;
  }

  &.edit:hover {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_200};
    color: ${({ theme }) => theme.COLORS.DARK_600};

    font-weight: bold;
  }

  &.delete:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    font-weight: bold;
  }
`;