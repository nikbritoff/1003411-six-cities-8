export type BackendOffer = {
  'bedrooms': number,
  'city': {
    'location': {
      'latitude': number,
      'longitude': number,
      'zoom': number,
    },
    'name': string
  },
  'description': string,
  'goods': string[],
  'host': {
    'avatar_url'?: string,
    'id'?: number,
    'is_pro'?: true,
    'name'?: string
  },
  'id': number,
  'images': string[],
  'is_favorite'?: boolean,
  'is_premium'?: boolean,
  'location': {
    'latitude': number,
    'longitude': number,
    'zoom': number
  },
  'max_adults'?: number,
  'preview_image'?: string,
  'price': number,
  'rating': number,
  'title': string,
  'type': string
}
