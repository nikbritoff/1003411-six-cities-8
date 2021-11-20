import { ActionType } from '../../types/action';
import { makeFakeOffers } from '../../utils/mock';
import { offers } from './offers';

const OFFERS_AMOUNT = 15;
const FAVORITE_CHANGEABLE_OFFER_INDEX = 5;

const mockOffers = makeFakeOffers(OFFERS_AMOUNT);
const changeableMockOffer = mockOffers[FAVORITE_CHANGEABLE_OFFER_INDEX];
const expectedMockOffers = mockOffers.slice().map((offer, index) => {
  if (index === FAVORITE_CHANGEABLE_OFFER_INDEX) {
    offer.isFavorite = !offer.isFavorite;
  }

  return offer;
});

changeableMockOffer.isFavorite = !changeableMockOffer.isFavorite;

describe('Reducer: offers', () => {
  it('without additional parameters should return initial state',  () => {
    expect(offers(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        offersList: [],
        offersLoading: false,
        offersError: false,
      });
  });

  it('should update offers by load offers', () => {
    const state = {
      offersList: [],
      offersLoading: false,
      offersError: false,
    };
    const loadOffersSuccessAction = {
      type: ActionType.LoadOffersSuccess,
      payload: mockOffers,
    };

    expect(offers(state, loadOffersSuccessAction))
      .toEqual({
        offersList: mockOffers,
        offersLoading: false,
        offersError: false,
      });
  });

  it('should update offersLoading to "true"', () => {
    const state = {
      offersList: [],
      offersLoading: false,
      offersError: false,
    };
    const requestOffersAction = {
      type: ActionType.RequestOffers,
      payload: true,
    };

    expect(offers(state, requestOffersAction))
      .toEqual({
        offersList: [],
        offersLoading: true,
        offersError: false,
      });
  });

  it('should update offersError to "true"', () => {
    const state = {
      offersList: [],
      offersLoading: false,
      offersError: false,
    };
    const loadOffersFailedAction = {
      type: ActionType.LoadOffersFailed,
      payload: true,
    };

    expect(offers(state, loadOffersFailedAction))
      .toEqual({
        offersList: [],
        offersLoading: false,
        offersError: true,
      });
  });

  it('should change offer favoriteStatus in offer', () => {
    const state = {
      offersList: mockOffers,
      offersLoading: false,
      offersError: false,
    };
    const changeFavoriteAction = {
      type: ActionType.ChangeFavorite,
      payload: changeableMockOffer,
    };

    expect(offers(state, changeFavoriteAction))
      .toEqual({
        offersList: expectedMockOffers,
        offersLoading: false,
        offersError: false,
      });
  });
});
