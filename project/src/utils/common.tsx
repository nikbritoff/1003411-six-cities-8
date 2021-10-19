const MAX_PERCENT = 100;
const RATING_STARS_AMOUNT = 5;

export const convertRating = (rating: number): number => rating * MAX_PERCENT / RATING_STARS_AMOUNT;
