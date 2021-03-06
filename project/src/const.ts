export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/offer/:id',
  NotFoud = '/404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Reviews = '/comments',
  Favorites = '/favorite',
}

export enum SortingStatus {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export const RATING_TITLES = [
  'terribly',
  'badly',
  'not bad',
  'good',
  'perfect',
];

export enum OfferType {
  nearby = 'near-places__card',
  property = 'property',
  favorite = 'favorites__card',
}

export const CITIES = [
  {
    location: {
      latitude: 48.85661,
      longitude: 2.35222,
      zoom: 12,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 50.93753,
      longitude: 6.96028,
      zoom: 12,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.85045,
      longitude: 4.34878,
      zoom: 12,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 12,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.57532,
      longitude: 10.01534,
      zoom: 12,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.22172,
      longitude: 6.77616,
      zoom: 12,
    },
    name: 'Dusseldorf',
  },
];

export const URL_MARKER_DEFAULT = './img/pin.svg';
export const URL_MARKER_CURRENT = './img/pin-active.svg';
