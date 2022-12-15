import styled from "styled-components";
import { theme } from "theme";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${p => theme.space[3]}px;
    margin-bottom: ${p => theme.space[2]}px;
`