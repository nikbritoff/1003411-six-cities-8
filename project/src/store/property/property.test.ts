import { ActionType } from '../../types/action';
import { Offer } from '../../types/offer';
import { makeFakeOffers } from '../../utils/mock';
import { property } from './property';


const mockPropertyOffers = makeFakeOffers(1);
const mockPropertyOffer = mockPropertyOffers[0];
const changeableMockOffer = mockPropertyOffers[0];
changeableMockOffer.isFavorite = !changeableMockOffer.isFavorite;

describe('Reducer: property', () => {
  it('without additional parameters should return initial state', () => {
    expect(property(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        property: {} as Offer,
        propertyLoading: false,
        propertyError: false,
      });
  });

  it('should update property by load property', () => {
    const state = {
      property: {} as Offer,
      propertyLoading: false,
      propertyError: false,
    };
    const loadPropertySuccessAction = {
      type: ActionType.LoadPropertySuccess,
      payload: mockPropertyOffer,
    };

    expect(property(state, loadPropertySuccessAction))
      .toEqual({
        property: mockPropertyOffer,
        propertyLoading: false,
        propertyError: false,
      });
  });

  it('should update propertyLoading to "true"', () => {
    const state = {
      property: {} as Offer,
      propertyLoading: false,
      propertyError: false,
    };
    const requestPropertyAction = {
      type: ActionType.RequestProperty,
      payload: true,
    };

    expect(property(state, requestPropertyAction))
      .toEqual({
        property: {} as Offer,
        propertyLoading: true,
        propertyError: false,
      });
  });

  it('should update propertyError to "true"', () => {
    const state = {
      property: {} as Offer,
      propertyLoading: false,
      propertyError: false,
    };
    const loadPropertyErrorAction = {
      type: ActionType.LoadPropertyFailed,
      payload: true,
    };

    expect(property(state, loadPropertyErrorAction))
      .toEqual({
        property: {} as Offer,
        propertyLoading: false,
        propertyError: true,
      });
  });

  it('should change offer favoriteStatus', () => {
    const state = {
      property: mockPropertyOffer,
      propertyLoading: false,
      propertyError: false,
    };
    const changeFavoriteAction = {
      type: ActionType.ChangeFavorite,
      payload: changeableMockOffer,
    };

    expect(property(state, changeFavoriteAction))
      .toEqual({
        property: changeableMockOffer,
        propertyLoading: false,
        propertyError: false,
      });
  });
});
