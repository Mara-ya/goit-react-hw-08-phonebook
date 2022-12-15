import styled from "styled-components";
import { theme } from 'theme';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Text = styled.p`
    color: ${p => theme.colors.white};
`

export const Button = styled.button`
    margin-left: ${p => theme.space[4]}px;
    border: medium none;
    background-image: none; 
    background: transparent;
    float: left;
    background-color: transparent;
    color: ${p => theme.colors.white};
    border-radius: ${p => theme.radii.normal};
    padding: ${p => theme.space[3]}px;

    &:hover{
        background-color: ${p => theme.colors.hover};
        color: ${p => theme.colors.black};
    }
`