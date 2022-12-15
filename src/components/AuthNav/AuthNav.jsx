import { NavLinkSt, Wrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <NavLinkSt to="/register">
        Register
      </NavLinkSt>
      <NavLinkSt to="/login">
        Log In
      </NavLinkSt>
    </Wrapper>
  );
};
