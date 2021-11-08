import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { ThunkAppDispatch } from '../../types/action';
import { logoutAction } from '../../store/api-actions';

const mapStateToProps = ({userInfo}: State) => ({
  userInfo,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onClickHandler() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function AuthUser({userInfo, onClickHandler}: PropsFromRedux): JSX.Element  {
  return (
    <>
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{userInfo.email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={AppRoute.Main}
          onClick={onClickHandler}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export { AuthUser };
export default connector(AuthUser);