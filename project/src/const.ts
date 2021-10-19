export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RATING_TITLES = [
  'terribly',
  'badly',
  'not bad',
  'good',
  'perfect',
];

// export const RATING_TITLES = {
//   '1': 'terribly',
//   '2': 'badly',
//   '3': 'not bad',
//   '4': 'good',
//   '5': 'perfect',
// };
