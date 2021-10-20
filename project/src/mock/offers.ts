import { Offer } from '../types/offer';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890', 5);

export const offers: Offer[] = [
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Washing machine'],
    host: {
      avatarUrl: 'img/1.png',
      id: Number(nanoid()),
      isPro: false,
      name: 'James',
    },
    id: Number(nanoid()),
    images: ['img/3.png', 'img/4.png'],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    maxAdults: 5,
    previewImage: 'img/apartment-02.jpg',
    price: 5000,
    rating: 3.5,
    title: 'Studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/1.png',
      id: Number(nanoid()),
      isPro: true,
      name: 'Alexey',
    },
    id: Number(nanoid()),
    images: ['img/1.png', 'img/2.png'],
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    maxAdults: 5,
    previewImage: 'img/apartment-02.jpg',
    price: 1200,
    rating: 4.3,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 42.370216,
        longitude: 3.895168,
        zoom: 10,
      },
      name: 'Hamburg',
    },
    description: 'Never sleep.',
    goods: ['Heating', 'Kitchen', 'Cable TV'],
    host: {
      avatarUrl: 'img/1.png',
      id: Number(nanoid()),
      isPro: false,
      name: 'Petr',
    },
    id: Number(nanoid()),
    images: ['img/1.png', 'img/2.png'],
    location: {
      latitude: 42.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    maxAdults: 5,
    previewImage: 'img/apartment-03.jpg',
    price: 4200,
    rating: 1,
    title: 'Luxury',
    type: 'apartment',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 42.370216,
        longitude: 3.895168,
        zoom: 10,
      },
      name: 'Hamburg',
    },
    description: 'Best place i Hamburg.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Iron'],
    host: {
      avatarUrl: 'img/1.png',
      id: Number(nanoid()),
      isPro: true,
      name: 'Lexi',
    },
    id: Number(nanoid()),
    images: ['img/1.png', 'img/2.png'],
    location: {
      latitude: 42.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    maxAdults: 5,
    previewImage: 'img/apartment-03.jpg',
    price: 200,
    rating: 4,
    title: 'Best in Hamburg',
    type: 'apartment',
  },
];

export const reviews = [
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 1,
    'rating': 4,
    'user': {
      'avatar_url': 'img/1.png',
      'id': 4,
      'is_pro': false,
      'name': 'Max',
    },
  },
];

