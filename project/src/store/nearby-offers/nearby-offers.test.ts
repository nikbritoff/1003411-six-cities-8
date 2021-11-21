import { ActionType } from '../../types/action';
import { makeFakeOffersList } from '../../utils/mock';
import { nearbyOffers } from './nearby-offers';

const OFFERS_AMOUNT = 3;
const FAVORITE_CHANGEABLE_OFFER_INDEX = 0;

const mockNearby = makeFakeOffersList(OFFERS_AMOUNT);
const mockNearbyOffer = mockNearby[0];
const expectedMockNearby = mockNearby.slice().map((offer, index) => {
  if (index === FAVORITE_CHANGEABLE_OFFER_INDEX) {
    offer.isFavorite = !offer.isFavorite;
  }

  return offer;
});


describe('Reducer: nearby', () => {
  it('without additional parameters should return initial state', () => {
    expect(nearbyOffers(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        nearby: [],
        nearbyLoading: false,
        nearbyError: false,
      });
  });

  it('should update nearby by load nearby', () => {
    const state = {
      nearby: [],
      nearbyLoading: false,
      nearbyError: false,
    };
    const loadNearbySuccessAction = {
      type:ActionType.LoadNearbySuccess,
      payload: mockNearby,
    };

    expect(nearbyOffers(state, loadNearbySuccessAction))
      .toEqual({
        nearby: mockNearby,
        nearbyLoading: false,
        nearbyError: false,
      });
  });

  it('should update nearbyLoading to "true"', () => {
    const state = {
      nearby: [],
      nearbyLoading: false,
      nearbyError: false,
    };
    const requestNearbyAction = {
      type: ActionType.RequestNearby,
      payload: true,
    };

    expect(nearbyOffers(state, requestNearbyAction))
      .toEqual({
        nearby: [],
        nearbyLoading: true,
        nearbyError: false,
      });
  });

  it('should update nearbyError to "true"', () => {
    const state = {
      nearby: [],
      nearbyLoading: false,
      nearbyError: false,
    };
    const loadNearbyFailedAction = {
      type: ActionType.LoadNearbyFailed,
      payload: true,
    };

    expect(nearbyOffers(state, loadNearbyFailedAction))
      .toEqual({
        nearby: [],
        nearbyLoading: false,
        nearbyError: true,
      });
  });

  it('should change offer favoriteStatus in nearby', () => {
    const state = {
      nearby: mockNearby,
      nearbyLoading: false,
      nearbyError: false,
    };
    const changeFavoriteAction = {
      type: ActionType.ChangeFavorite,
      payload: mockNearbyOffer,
    };

    expect(nearbyOffers(state, changeFavoriteAction))
      .toEqual({
        nearby : expectedMockNearby,
        nearbyLoading: false,
        nearbyError: false,
      });
  });
});
