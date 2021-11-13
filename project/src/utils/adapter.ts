import { Offer } from '../types/offer';
import { BackendOffer } from '../types/backend-offer';
import { BackendUserInfo } from '../types/backend-user-info';
import { UserInfo } from '../types/user-info';
import { BackendReview } from '../types/backend-revies';
import { Review } from '../types/review';
import { CommentStateProps } from '../components/property-new-review/property-new-review';
import { BackendNewReview } from '../types/backend-new-review';

export const adaptOfferToClient = (offer: BackendOffer): Offer => {
  const adaptedOffer = {
    ...offer,
    host: {
      avatarUrl: offer.host.avatar_url,
      id: offer.host.id,
      isPro: offer.host.is_pro,
      name: offer.host.name,
    },
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
  };

  delete adaptedOffer['is_favorite'];
  delete adaptedOffer['is_premium'];
  delete adaptedOffer['max_adults'];
  delete adaptedOffer['preview_image'];

  return adaptedOffer as Offer;
};

export const adaptUserInfoToClient = (user: BackendUserInfo): UserInfo => {
  const adaptedUser = {
    ...user,
    avatarUrl: user.avatar_url,
    isPro: user.is_pro,
  };

  delete adaptedUser['avatar_url'];
  delete adaptedUser['is_pro'];

  return adaptedUser as UserInfo;
};

export const adaptReviewToClient = (review: BackendReview): Review => {
  const adaptedReview = {
    ...review,
    user: {
      avatarUrl : review.user.avatar_url,
      id: review.user.id,
      isPro: review.user.is_pro,
      name: review.user.name,
    },
  };

  return adaptedReview as Review;
};

export const adaptNewReviewToBackend = (review: CommentStateProps): BackendNewReview => {
  const adaptedNewReview = {
    rating: Number(review.rating.value),
    comment: review.review.value,
  };

  return adaptedNewReview;
};
