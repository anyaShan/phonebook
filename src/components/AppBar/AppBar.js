import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { AppWrap } from './AppBar.styled';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppWrap>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppWrap>
  );
};
