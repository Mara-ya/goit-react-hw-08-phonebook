import styled from "styled-components";
import { theme } from 'theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${p => theme.space[4]}px;
`

export const Label = styled.label`
  display: block;
  padding: ${p => theme.space[3]}px 0;
`

export const Button = styled.button`
  border: medium none;
  background-image: none; 
  background: transparent;
  float: left;
  background-color: transparent;
`