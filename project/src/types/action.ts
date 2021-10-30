import { City } from './city';

export enum ActionType {
  ChangeCity = 'main/changeCity',
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity;
  payload: City;
}


export type Actions = ChangeCityAction;
