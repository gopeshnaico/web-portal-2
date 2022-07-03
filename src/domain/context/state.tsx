import { createContext, useContext, useEffect, useReducer } from 'react';

export type State = {
  authToken: string;
  phone: string;
  attempt: string;
  buyerOrSeller: string;
};

type Action =
  | {
      type: 'updateAuth';
      data: string;
    }
  | {
      type: 'getPhone';
      data: string;
    }
  | {
      type: 'getAttempt';
      data: string;
    }
  | { type: 'updateSelection'; buyerOrSeller: string };

export type Dispatch = (action: Action) => void;

const AppContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

export const AppWrapper = ({ children }: any) => {
  const sharedState = {
    buyerOrSeller: '',
    authToken: '',
    phone: '',
    attempt: '',
  };

  const sessionReducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'updateAuth': {
        return {
          ...state,
          authToken: action.data,
        };
      }
      case 'updateSelection': {
        return {
          ...state,
          buyerOrSeller: action.buyerOrSeller,
        };
      }
      case 'getPhone': {
        return {
          ...state,
          phone: action.data,
        };
      }
      case 'getAttempt': {
        return {
          ...state,
          attempt: action.data,
        };
      }

      default: {
        throw new Error(`Unhandled action type: ${action}`);
      }
    }
  };

  const [state, dispatch] = useReducer(sessionReducer, sharedState);
  const value = { state, dispatch };

  useEffect(() => {
    const savedCredentials = localStorage.getItem('authToken');
    dispatch({
      type: 'updateAuth',
      data: savedCredentials,
    });
  }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
