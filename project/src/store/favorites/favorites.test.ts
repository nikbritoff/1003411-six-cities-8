import { ActionType } from '../../types/action';
import { makeFakeOffers } from '../../utils/mock';
import { favorites } from './favorites';

const CHANGEABLE_OFFER_INDEX = 0;

const mockFavorites = makeFakeOffers(5, true);
const mockFavoriteOffer = mockFavorites[CHANGEABLE_OFFER_INDEX];

describe('Reducer: favorites', () => {
  it('without additional parameters should return initial state',  () => {
    expect(favorites(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        favorites: [],
        favoritesLoading: false,
        favoritesError: false,
      });
  });

  it('should update favorites by load favorites', () => {
    const state = {
      favorites: [],
      favoritesLoading: false,
      favoritesError: false,
    };
    const loadFavoritesSuccessAction = {
      type: ActionType.LoadFavoritesSuccess,
      payload: mockFavorites,
    };

    expect(favorites(state, loadFavoritesSuccessAction))
      .toEqual({
        favorites: mockFavorites,
        favoritesLoading: false,
        favoritesError: false,
      });
  });

  it('should update favoritesLoading to "true"', () => {
    const state = {
      favorites: [],
      favoritesLoading: false,
      favoritesError: false,
    };
    const requestFavoritesAction = {
      type: ActionType.RequestFavorites,
      payload: true,
    };

    expect(favorites(state, requestFavoritesAction))
      .toEqual({
        favorites: [],
        favoritesLoading: true,
        favoritesError: false,
      });
  });

  it('should update favoritesError to "true"', () => {
    const state = {
      favorites: [],
      favoritesLoading: false,
      favoritesError: false,
    };
    const requestFavoritesAction = {
      type: ActionType.LoadFavoritesFailed,
      payload: true,
    };

    expect(favorites(state, requestFavoritesAction))
      .toEqual({
        favorites: [],
        favoritesLoading: false,
        favoritesError: true,
      });
  });

  it('should remove offer from favorites', () => {
    const state = {
      favorites: mockFavorites,
      favoritesLoading: false,
      favoritesError: false,
    };
    const changeFavoriteAction = {
      type: ActionType.ChangeFavorite,
      payload: mockFavoriteOffer,
    };

    expect(favorites(state, changeFavoriteAction))
      .toEqual({
        favorites: mockFavorites.slice(1),
        favoritesLoading: false,
        favoritesError: false,
      });
  });
});
