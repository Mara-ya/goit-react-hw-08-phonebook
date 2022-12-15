import styled from "styled-components";
import { theme } from 'theme';

export const Wrapper = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${p => theme.space[3]}px ${p => theme.space[4]}px;
  background-color: ${p => theme.colors.accent};
  `

export const ForUser = styled.div`
    display: flex;
    padding: ${p => theme.space[3]}px;
`