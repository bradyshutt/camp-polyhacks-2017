import { ActionReducer, Action } from '@ngrx/store';
import { User } from './User';

export const ACTIONS = {
  SET_PICKUP_LOCATION: 'SET_PICKUP_LOCATION',
  SET_NUM_PEOPLE: 'SET_NUM_PEOPLE'
};

interface AppState {
  pickupLocation: string;
  numberOfPeople: number;
  currentLocation: string;
  user: User;

}

export function storeReducer(state: number = 0, action: Action) {

  switch (action.type) {

    case ACTIONS.SET_PICKUP_LOCATION:
      console.log('set pickup location');
      return Object.assign({}, state, {pickupLocation: action.payload});

    case ACTIONS.SET_NUM_PEOPLE:
      console.log('set num people');
      return Object.assign({}, state, {pickupLocation: action.payload});

    default:
      return state;
  }
}


