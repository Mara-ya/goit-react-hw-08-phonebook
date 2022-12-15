import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { ForUser, Wrapper } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrapper>
      <Navigation />
      <ForUser>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </ForUser>
    </Wrapper>
  );
};
