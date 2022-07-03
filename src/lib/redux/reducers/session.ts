import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type State = {
  authToken: string;
  phone: string;
  attempt: number;
  buyerOrSeller: string;
  loggedCustomerId: string;
  categoryDetailsInCreateProduct: {
    categoryHeaderName: string;
    categoryId: string;
  };
};

const initialState: State = {
  buyerOrSeller: '',
  authToken: '',
  phone: '',
  attempt: 0,
  loggedCustomerId: '',
  categoryDetailsInCreateProduct: { categoryHeaderName: '', categoryId: '' },
};

type Action =
  | {
      type: 'updateAuth';
      payload: string;
    }
  | {
      type: 'getPhone';
      payload: string;
    }
  | {
      type: 'getAttempt';
      payload: string;
    }
  | { type: 'updateSelection'; payload: string }
  | { type: 'updateCustomerId'; payload: string }
  | { type: 'updateCategoryDetailsInCreateProduct'; payload: any };

export const sessionSlice = createSlice({
  name: 'authSession',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions.
  reducers: {
    updateAuth: (state: State, action: Action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers.
      // It doesn't actually mutate the state because it uses the Immer library, which detects changes to a "draft state" and produces a brand new immutable state based off those changes
      state.authToken = action.payload;
    },
    updateSelection: (state: State, action: Action) => {
      state.buyerOrSeller = action.payload;
    },
    updatePhone: (state: State, action: Action) => {
      state.phone = action.payload;
    },
    getAttempt: (state: State, action: Action) => {
      state.attempt = action.payload as unknown as number;
    },
    updateCustomerId: (state: State, action: Action) => {
      state.loggedCustomerId = action.payload;
    },
    updateCategoryDetailsInCreateProduct: (state: State, action: Action) => {
      state.categoryDetailsInCreateProduct = action?.payload;
    },
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const {
  updateAuth,
  getAttempt,
  updatePhone,
  updateSelection,
  updateCustomerId,
  updateCategoryDetailsInCreateProduct,
} = sessionSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectSelection = (state: RootState) =>
  state.authSession.buyerOrSeller;
export const selectPhone = (state: RootState) => state.authSession.phone;
export const selectAttempt = (state: RootState) => state.authSession.attempt;
export const selectAuthToken = (state: RootState) =>
  state.authSession.authToken;
export const selectLoggedCustomerId = (state: RootState) =>
  state.authSession.loggedCustomerId;
export const selectCategoryDetailsInCreateProduct = (state: RootState) =>
  state.authSession.categoryDetailsInCreateProduct;

// exporting the reducer here, as we need to add this to the store
export default sessionSlice.reducer;
