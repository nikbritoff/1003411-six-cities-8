import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { getUserData } from '../../store/user-data/selectors';

function AuthUser(): JSX.Element  {
  const dispatch = useDispatch();

  const userInfo = useSelector(getUserData);
  const handleSignOutClick = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img src={userInfo.avatarUrl} alt={userInfo.email}></img>
          </div>
          <span className="header__user-name user__name">{userInfo.email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={AppRoute.Main}
          onClick={handleSignOutClick}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default AuthUser;
