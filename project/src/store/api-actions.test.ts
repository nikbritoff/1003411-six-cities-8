import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../types/state';
import { Action } from 'redux';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { checkAuthAction, fetchFavoritesAction, fetchNearbyAction, fetchOfferAction, fetchPropertyAction, fetchReviewsAction, loginAction, logoutAction, postReviewAction } from './api-actions';
import { autorizationSuccess, changeFavorite, loadFavoritesSuccess, loadNearbySuccess, loadOffersSuccess, loadPropertySuccess, loadReviewsSuccess, postingNewReview, redirectToRoute, requestAuthorization, requestFavorites, requestNearby, requestOffers, requestProperty, requestReviews, requireAutorization, requireLogout } from './action';
import { UserInfo } from '../types/user-info';
import { AuthData } from '../types/auth-data';
import { makeFakeBackendOffer, makeFakeBackendOffersList, makeFakeBackendReviewsList } from '../utils/mock';
import { adaptOfferToClient, adaptReviewToClient } from '../utils/adapter';

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createAPI(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      requireAutorization(AuthorizationStatus.Auth),
      autorizationSuccess({} as UserInfo),
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123g'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {
        'token': 'secret',
        'avatar_url': 'img.png',
        'email': 'test@test.ru',
        'id':  1,
        'is_pro': false,
        'name': 'test',
      });

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    expect(store.getActions()).toEqual([
      requestAuthorization(true),
      requireAutorization(AuthorizationStatus.Auth),
      autorizationSuccess({
        avatarUrl: 'img.png',
        email: 'test@test.ru',
        id:  1,
        isPro: false,
        name: 'test',
        token:  'secret',
      }),
      redirectToRoute(AppRoute.Main),
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    expect(store.getActions()).toEqual([
      requireLogout(),
      loadFavoritesSuccess([]),
      requestOffers(true),
    ]);
    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });

  it('should dispatch loadOffersSuccess when get /hotels', async () => {
    mockAPI
      .onGet(APIRoute.Hotels)
      .reply(200, []);

    const store = mockStore();

    await store.dispatch(fetchOfferAction());

    expect(store.getActions()).toEqual([
      requestOffers(true),
      loadOffersSuccess([]),
    ]);
  });

  it('should dispatch loadPropertySuccess when get /hotels/:id', async () => {
    const mockBackendOffer = makeFakeBackendOffer();
    const mockAdaptedOffer  = adaptOfferToClient(mockBackendOffer);
    const mockId = String(mockBackendOffer.id);

    mockAPI
      .onGet(`${APIRoute.Hotels}/${mockId}`)
      .reply(200, mockBackendOffer);

    const store = mockStore();

    await store.dispatch(fetchPropertyAction(mockId));

    expect(store.getActions()).toEqual([
      requestProperty(true),
      loadPropertySuccess(mockAdaptedOffer),
    ]);
  });

  it('should dispatch loadNearbySuccess when get /hotels/:hotel_id/nearby', async () => {
    const mockBackendOffer = makeFakeBackendOffer();
    const mockNearbyOffersList = makeFakeBackendOffersList();
    const mockId = String(mockBackendOffer.id);

    mockAPI
      .onGet(`${APIRoute.Hotels}/${mockId}${APIRoute.Nearby}`)
      .reply(200, mockNearbyOffersList);

    const store = mockStore();

    await store.dispatch(fetchNearbyAction(mockId));

    expect(store.getActions()).toEqual([
      requestNearby(true),
      loadNearbySuccess(mockNearbyOffersList.map(adaptOfferToClient)),
    ]);
  });

  it('should dispatch loadReviewsSuccess when get /comments/:hotel_id', async () => {
    const mockBackendOffer = makeFakeBackendOffer();
    const mockId = String(mockBackendOffer.id);
    const mockBackendReviewsList = makeFakeBackendReviewsList();

    mockAPI
      .onGet(`${APIRoute.Reviews}/${mockId}`)
      .reply(200, mockBackendReviewsList);

    const store = mockStore();

    await store.dispatch(fetchReviewsAction(mockId));

    expect(store.getActions()).toEqual([
      requestReviews(true),
      loadReviewsSuccess(mockBackendReviewsList.map(adaptReviewToClient)),
    ]);
  });

  it('should dispatch loadFavoritesSuccess when get /favorite', async () => {
    const mockFavoritesList = makeFakeBackendOffersList(3, true);

    mockAPI
      .onGet(APIRoute.Favorites)
      .reply(200, mockFavoritesList);

    const store = mockStore();

    await store.dispatch(fetchFavoritesAction());

    expect(store.getActions()).toEqual([
      requestFavorites(),
      loadFavoritesSuccess(mockFavoritesList.map(adaptOfferToClient)),
    ]);
  });

  it('should dispatch postNewReviewSuccess when post /comments/:hotel_id', async () => {
    const mockBackendOffer = makeFakeBackendOffer();
    const mockId = String(mockBackendOffer.id);
    const mockBackendReviewsList = makeFakeBackendReviewsList();
    const mockNewReview = makeFakeBackendReviewsList(1)[0];
    const expectedMockReviewsList = [...mockBackendReviewsList, mockNewReview];

    mockAPI
      .onPost(`${APIRoute.Reviews}/${mockId}`)
      .reply(200, expectedMockReviewsList);

    const store = mockStore();

    await store.dispatch(postReviewAction({
      id: String(mockNewReview.id),
      comment: mockNewReview.comment,
      rating: String(mockNewReview.rating),
    }));

    expect(store.getActions()).toEqual([
      postingNewReview(true),
      postingNewReview(false),
    ]);
  });

  it('should dispatch changeFavorite when post /favorite/:hotel_id/:status', async () => {
    const mockBackendOffer = makeFakeBackendOffer();
    const mockOffer = adaptOfferToClient(mockBackendOffer);
    const mockId = String(mockOffer.id);
    const statusCode = Number(!mockOffer.isFavorite);

    mockAPI
      .onPost(`${APIRoute.Favorites}/${mockId}/${statusCode}`)
      .reply(200, mockBackendOffer);

    const store = mockStore();

    await store.dispatch(changeFavorite(mockOffer));

    expect(store.getActions()).toEqual([
      changeFavorite(mockOffer),
    ]);
  });
});
