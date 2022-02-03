// LoadingContext.js
// import React, { createContext, useContext, useState } from 'react';
// import Loader from './Loader';

// const LoadingContext = createContext({
//   loading: false,
//   setLoading: (value: boolean) => {},
// });

// export const LoadingProvider: React.FC = ({ children }) => {
//   const [loading, setLoading] = useState(false);
//   const value = { loading, setLoading };
//   return (
//     <LoadingContext.Provider value={value}>
//       {children}
//       <Loader loading={loading} />
//     </LoadingContext.Provider>
//   );
// };

// export function useLoading() {
//   const context = useContext(LoadingContext);
//   if (!context) {
//     throw new Error('useLoading must be used within LoadingProvider');
//   }
//   return context;
// }

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
