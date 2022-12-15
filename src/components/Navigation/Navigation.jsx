import { useAuth } from 'hooks/useAuth';
import { NavLinkSt } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkSt to="/">
        Home
      </NavLinkSt>
      {isLoggedIn && (
        <NavLinkSt to="/contacts">
          Contacts
        </NavLinkSt>
      )}
    </nav>
  );
};
