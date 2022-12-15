import styled from "styled-components";
import { Form, Field } from 'formik';
import { theme } from 'theme';

export const WrapperForm = styled(Form)`
    display: table-caption;
`

export const InputForm = styled(Field)`
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px;
    color: #1A2027;
    background: #fff;
    border: 1px solid #E0E3E7;
    box-shadow: 0px 2px 2px #F3F6F9;

    &:hover {
    border-color: #56B6B8;
  }

  &:focus {
    border-color: #56B6B8;
    outline: 3px solid #99CCF3;
  }
`

export const Label = styled.label`
    display: block;
    padding: ${p => theme.space[3]}px 0;
`