import styled from "styled-components";
import { theme } from 'theme';
import { NavLink } from "react-router-dom";

export const NavLinkSt = styled(NavLink)`
    color: ${p => theme.colors.white};
    padding: ${p => theme.space[2]}px;
    &:hover{
        color: ${p => theme.colors.hover};
    }
`