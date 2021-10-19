export type Offer = {
  bedrooms: number,
  city: {
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    },
    name: string,
  },
  description: string,
  goods: string[],
  host: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string
  },
  id: number,
  images: string[],
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  isFavorite: boolean,
  isPremium: boolean,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
};
