import React from 'react';
import Loader from '../../components/molecules/Loader/Loader';

type Action = { type: 'loading' } | { type: 'loaded' };
type Dispatch = (action: Action) => void;
type State = { loading: boolean };
type LoadProviderProps = { children: React.ReactNode };

const LoadStateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined
);

function loadReducer(state: State, action: Action) {
  switch (action.type) {
    case 'loading': {
      return { loading: true };
    }
    case 'loaded': {
      return { loading: false };
    }
    default: {
      return state;
    }
  }
}

function LoadProvider({ children }: LoadProviderProps) {
  const [state, dispatch] = React.useReducer(loadReducer, { loading: false });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <LoadStateContext.Provider value={value}>
      {children}
      <Loader loading={state.loading} />
    </LoadStateContext.Provider>
  );
}

function useLoad() {
  const context = React.useContext(LoadStateContext);
  if (context === undefined) {
    throw new Error('useLoad must be used within a LoadProvider');
  }
  return context;
}

export { LoadProvider, useLoad };
