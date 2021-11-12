import { Link } from 'react-router-dom';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import AuthUser from '../auth-user/auth-user';
import NoAuthUser from '../no-auth-user/no-auth-user';

const mapStateToProps = ({USER}: State) => ({
  authorizationStatus: USER.authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Header({authorizationStatus}: ConnectedComponentProps): JSX.Element  {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth ?
                <AuthUser/> :
                <NoAuthUser/>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export  { Header };
export default connector(Header);
