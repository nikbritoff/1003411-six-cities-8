import { random, name, datatype, date, internet } from 'faker';
import { Offer } from '../types/offer';
import { getRandomCity } from './common';
import { Review } from '../types/review';
import { UserInfo } from '../types/user-info';

const MAX_RATING = 5;

export const makeFakeOffer = (isFavorite = false): Offer => {
  const city = getRandomCity();

  return {
    bedrooms: datatype.number(),
    city: city,
    description: random.words(),
    goods: ['Washing machine'],
    host: {
      avatarUrl: 'img/1.png',
      id: datatype.number(),
      isPro: datatype.boolean(),
      name: name.firstName(),
    },
    id: datatype.number(),
    images: ['img/3.png', 'img/4.png'],
    location: {
      latitude: city.location.latitude,
      longitude: city.location.longitude,
      zoom: 8,
    },
    isFavorite: isFavorite ? true : datatype.boolean(),
    isPremium: datatype.boolean(),
    maxAdults: datatype.number(),
    previewImage: 'img/apartment-02.jpg',
    price: datatype.number(),
    rating: datatype.number(MAX_RATING),
    title: random.words(),
    type: random.word(),
  };
};

export const makeFakeOffers = (amount = 5, isAllFavorites = false): Offer[] => {
  const fakeOffers = new Array(amount).fill(null).map(() => (
    makeFakeOffer(isAllFavorites)
  ));

  return fakeOffers;
};

export const makeFakeReviews = (amount = 3): Review[] => {
  const fakeReviews = new Array(amount).fill(null).map(() => ({
    comment: random.words(),
    date: String(date.past()),
    id: datatype.number(),
    rating: datatype.number(MAX_RATING),
    user: {
      avatarUrl: 'img/2.png',
      id: datatype.number(),
      isPro: datatype.boolean(),
      name: name.firstName(),
    },
  }),
  );

  return fakeReviews;
};

export const makeFakeUserInfo = ():UserInfo => ({
  avatarUrl: internet.avatar(),
  email: internet.email(),
  id:  datatype.number(),
  isPro: datatype.boolean(),
  name: name.firstName(),
});
