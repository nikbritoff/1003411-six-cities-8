import { random, name, datatype, date, internet } from 'faker';
import { Offer } from '../types/offer';
import { getRandomCity } from './common';
import { Review } from '../types/review';
import { UserInfo } from '../types/user-info';
import { BackendOffer } from '../types/backend-offer';
import { BackendReview } from '../types/backend-revies';

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

export const makeFakeOffersList = (amount = 5, isAllFavorites = false): Offer[] => {
  const fakeOffersList = new Array(amount).fill(null).map(() => (
    makeFakeOffer(isAllFavorites)
  ));

  return fakeOffersList;
};

export const makeFakeBackendOffer = (isFavorite = false):BackendOffer => {
  const city = getRandomCity();

  return {
    'bedrooms': datatype.number(),
    'city': city,
    'description': random.words(),
    'goods': ['Washing machine'],
    'host': {
      'avatar_url': 'img/1.png',
      'id': datatype.number(),
      'is_pro': datatype.boolean(),
      'name': name.firstName(),
    },
    'id': datatype.number(),
    'images': ['img/3.png', 'img/4.png'],
    'location': {
      'latitude': city.location.latitude,
      'longitude': city.location.longitude,
      'zoom': 8,
    },
    'is_favorite': isFavorite ? true : datatype.boolean(),
    'is_premium': datatype.boolean(),
    'max_adults': datatype.number(),
    'preview_image': 'img/apartment-02.jpg',
    'price': datatype.number(),
    'rating': datatype.number(MAX_RATING),
    'title': random.words(),
    'type': random.word(),
  };
};

export const makeFakeBackendOffersList = (amount = 3, isAllFavorites = false): BackendOffer[] => {
  const fakeBackendOffersList =  new Array(amount).fill(null).map(() => (
    makeFakeBackendOffer(isAllFavorites)),
  );

  return fakeBackendOffersList;
};

export const makeFakeReviewsList = (amount = 3): Review[] => {
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

export const makeFakeBackendReviewsList = (amount = 3): BackendReview[] => {
  const fakeBackendReviews = new Array(amount).fill(null).map(() => ({
    'comment': random.words(),
    'date': String(date.past()),
    'id': datatype.number(),
    'rating': datatype.number(MAX_RATING),
    'user': {
      'avatar_url': 'img/2.png',
      'id': datatype.number(),
      'is_pro': datatype.boolean(),
      'name': name.firstName(),
    },
  }),
  );

  return fakeBackendReviews;
};

export const makeFakeUserInfo = ():UserInfo => ({
  avatarUrl: internet.avatar(),
  email: internet.email(),
  id:  datatype.number(),
  isPro: datatype.boolean(),
  name: name.firstName(),
  token: random.word(),
});
