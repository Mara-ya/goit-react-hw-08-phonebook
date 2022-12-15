import styled from "styled-components";
import { theme } from 'theme';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: ${p => theme.space[4]}px;
`

export const Tagline = styled.h1`
    text-transform: uppercase;
`